import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { FirstLevelSort } from '@/entity/BasicSort'

export const getFirstLevelSortById = async (req: Request) => {
  const firstLevelSortRepository = AppDataSource.getRepository(FirstLevelSort)
  const firstLevelSortObj = await firstLevelSortRepository.findOneBy({
    id: req.body.id
  })
  if (!firstLevelSortObj) {
    throw '一级类别不存在'
  }
  return { firstLevelSortObj, firstLevelSortRepository }
}

export const checkFirstLevelSortExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(FirstLevelSort)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '一级类别不存在'
  }
}
