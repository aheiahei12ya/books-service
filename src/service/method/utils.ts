import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Method } from '@/entity/BasicSort'

export const getMethodById = async (req: Request) => {
  const methodRepository = AppDataSource.getRepository(Method)
  const methodObj = await methodRepository.findOneBy({
    id: req.body.id
  })
  if (!methodObj) {
    throw '形式不存在'
  }
  return { methodObj, methodRepository }
}

export const checkMethodExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Method)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '形式不存在'
  }
}
