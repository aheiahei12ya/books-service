import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Category } from '@/entity/BasicSort'
import { getCategoryById } from '@/service/category/utils'
import { checkLedgerExistsById } from '@/service/ledger/utils'
import { checkUniqueToken, createUUIDWithUID } from '@/util'

export const categoryList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Category)

  return await repository.find()
}

export const categoryCreate = async (req: Request, res: Response) => {
  checkUniqueToken(req.body.token)
  await checkLedgerExistsById(req.body.lid)

  const repository = AppDataSource.getRepository(Category)

  let uuid = createUUIDWithUID(req.body.token)
  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.body.token)
  }

  const category = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    ledgerId: req.body.lid
  })

  await repository.save(category)

  return {
    id: category.id
  }
}

export const categoryDetail = async (req: Request, res: Response) => {
  const { categoryObj } = await getCategoryById(req)
  return categoryObj
}

export const categoryModify = async (req: Request, res: Response) => {
  checkUniqueToken(req.body.token)

  const { categoryObj, categoryRepository } = await getCategoryById(req)
  const newCategory = categoryRepository.merge(categoryObj, req.body)
  await categoryRepository.save(newCategory)
  return {
    message: '类别信息修改成功'
  }
}

export const categoryRemove = async (req: Request, res: Response) => {
  checkUniqueToken(req.body.token)

  const { categoryObj, categoryRepository } = await getCategoryById(req)
  await categoryRepository.remove(categoryObj)
  return {
    message: '类别已删除'
  }
}
