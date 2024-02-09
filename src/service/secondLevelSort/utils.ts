import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { SecondLevelSort } from '@/entity/BasicSort'

export const getSecondLevelSortById = async (req: Request) => {
  const secondLevelSortRepository = AppDataSource.getRepository(SecondLevelSort)
  const secondLevelSortObj = await secondLevelSortRepository.findOneBy({
    id: req.body.id
  })
  if (!secondLevelSortObj) {
    throw '二级类别不存在'
  }
  return { secondLevelSortObj, secondLevelSortRepository }
}

export const checkSecondLevelSortExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(SecondLevelSort)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '二级类别不存在'
  }
}
