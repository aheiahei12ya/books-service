import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Sort } from '@/entity/BasicSort'

export const getSortById = async (req: Request) => {
  const sortRepository = AppDataSource.getRepository(Sort)
  const sortObj = await sortRepository.findOneBy({
    id: req.body.id
  })
  if (!sortObj) {
    throw '一级类别不存在'
  }
  return { sortObj, sortRepository }
}

export const checkSortExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Sort)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '一级类别不存在'
  }
}
