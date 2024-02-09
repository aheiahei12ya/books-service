import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { FirstLevelSort } from '@/entity/BasicSort'
import { checkCategoryExistsById } from '@/service/category/utils'
import { getFirstLevelSortById } from '@/service/firstLevelSort/utils'
import { createUUIDWithUID } from '@/util'

export const firstLevelSortList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(FirstLevelSort)

  return await repository.findBy({
    categoryId: req.body.categoryId
  })
}

export const firstLevelSortCreate = async (req: Request, res: Response) => {
  await checkCategoryExistsById(req.body.categoryId)

  const repository = AppDataSource.getRepository(FirstLevelSort)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const firstLevelSort = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    categoryId: req.body.categoryId
  })

  await repository.save(firstLevelSort)

  return {
    id: firstLevelSort.id
  }
}

export const firstLevelSortDetail = async (req: Request, res: Response) => {
  const { firstLevelSortObj } = await getFirstLevelSortById(req)
  return firstLevelSortObj
}

export const firstLevelSortModify = async (req: Request, res: Response) => {
  const { firstLevelSortObj, firstLevelSortRepository } =
    await getFirstLevelSortById(req)
  const newFirstLevelSort = firstLevelSortRepository.merge(
    firstLevelSortObj,
    req.body
  )
  await firstLevelSortRepository.save(newFirstLevelSort)
  return {
    message: '一级类别信息修改成功'
  }
}

export const firstLevelSortRemove = async (req: Request, res: Response) => {
  const { firstLevelSortObj, firstLevelSortRepository } =
    await getFirstLevelSortById(req)
  await firstLevelSortRepository.remove(firstLevelSortObj)
  return {
    message: '一级类别已删除'
  }
}
