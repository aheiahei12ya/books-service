import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Method } from '@/entity/BasicSort'
import { checkCategoryExistsById } from '@/service/category/utils'
import { getMethodById } from '@/service/method/utils'
import { createUUIDWithUID } from '@/util'

export const methodList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Method)

  return await repository.findBy({
    categoryId: req.body.categoryId
  })
}

export const methodCreate = async (req: Request, res: Response) => {
  await checkCategoryExistsById(req.body.categoryId)

  const repository = AppDataSource.getRepository(Method)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const method = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,
    usage: 0,

    categoryId: req.body.categoryId
  })

  await repository.save(method)

  return {
    id: method.id
  }
}

export const methodDetail = async (req: Request, res: Response) => {
  const { methodObj } = await getMethodById(req)
  return methodObj
}

export const methodModify = async (req: Request, res: Response) => {
  const { methodObj, methodRepository } = await getMethodById(req)
  const newMethod = methodRepository.merge(methodObj, req.body)
  await methodRepository.save(newMethod)
  return {
    message: '形式信息修改成功'
  }
}

export const methodRemove = async (req: Request, res: Response) => {
  const { methodObj, methodRepository } = await getMethodById(req)
  await methodRepository.remove(methodObj)
  return {
    message: '形式信息已删除'
  }
}
