import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Sort } from '@/entity/BasicSort'
import { checkSortExistsById, getSortById } from '@/service/sort/utils'
import { createUUIDWithUID } from '@/util'

export const sortList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Sort)

  return await repository.findBy({
    sortId: req.body.sortId
  })
}

export const sortCreate = async (req: Request, res: Response) => {
  await checkSortExistsById(req.body.sortId)

  const repository = AppDataSource.getRepository(Sort)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const sort = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,
    usage: 0,
    color: req.body.color,

    sortId: req.body.sortId
  })

  await repository.save(sort)

  return {
    id: sort.id
  }
}

export const sortDetail = async (req: Request, res: Response) => {
  const { sortObj } = await getSortById(req)
  return sortObj
}

export const sortModify = async (req: Request, res: Response) => {
  const { sortObj, sortRepository } = await getSortById(req)
  const newSort = sortRepository.merge(sortObj, req.body)
  await sortRepository.save(newSort)
  return {
    message: '一级类别信息修改成功'
  }
}

export const sortRemove = async (req: Request, res: Response) => {
  const { sortObj, sortRepository } = await getSortById(req)
  await sortRepository.remove(sortObj)
  return {
    message: '一级类别已删除'
  }
}
