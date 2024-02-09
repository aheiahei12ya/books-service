import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Category } from '@/entity/BasicSort'

export const getCategoryById = async (req: Request) => {
  const categoryRepository = AppDataSource.getRepository(Category)
  const categoryObj = await categoryRepository.findOneBy({
    id: req.body.id
  })
  if (!categoryObj) {
    throw '类别不存在'
  }
  return { categoryObj, categoryRepository }
}

export const checkCategoryExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Category)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '类别不存在'
  }
}
