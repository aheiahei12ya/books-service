import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { SecondLevelSort } from '@/entity/BasicSort'
import { checkFirstLevelSortExistsById } from '@/service/sort/firstLevelSort/utils'
import { getSecondLevelSortById } from '@/service/sort/secondLevelSort/utils'
import { createUUIDWithUID } from '@/util'

export const secondLevelSortList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(SecondLevelSort)

  return await repository.findBy({
    parentSortId: req.body.parentSortId
  })
}

export const secondLevelSortCreate = async (req: Request, res: Response) => {
  await checkFirstLevelSortExistsById(req.body.parentSortId)

  const repository = AppDataSource.getRepository(SecondLevelSort)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const secondLevelSort = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    parentSortId: req.body.parentSortId
  })

  await repository.save(secondLevelSort)

  return {
    id: secondLevelSort.id
  }
}

export const secondLevelSortDetail = async (req: Request, res: Response) => {
  const { secondLevelSortObj } = await getSecondLevelSortById(req)
  return secondLevelSortObj
}

export const secondLevelSortModify = async (req: Request, res: Response) => {
  const { secondLevelSortObj, secondLevelSortRepository } =
    await getSecondLevelSortById(req)
  const newSecondLevelSort = secondLevelSortRepository.merge(
    secondLevelSortObj,
    req.body
  )
  await secondLevelSortRepository.save(newSecondLevelSort)
  return {
    message: '二级类别信息修改成功'
  }
}

export const secondLevelSortRemove = async (req: Request, res: Response) => {
  const { secondLevelSortObj, secondLevelSortRepository } =
    await getSecondLevelSortById(req)
  await secondLevelSortRepository.remove(secondLevelSortObj)
  return {
    message: '二级类别已删除'
  }
}
