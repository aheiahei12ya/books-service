import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { User } from '@/entity/User'

export const getUserById = async (req: Request) => {
  const userRepository = AppDataSource.getRepository(User)
  const userObj = await userRepository.findOneBy({
    id: req.cookies.uid
  })
  if (!userObj) {
    throw '用户不存在'
  }
  return { userObj, userRepository }
}

export const checkUserExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(User)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '用户不存在'
  }
}
