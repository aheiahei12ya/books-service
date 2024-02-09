import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Group } from '@/entity/Group'

export const getGroupById = async (req: Request) => {
  const groupRepository = AppDataSource.getRepository(Group)
  const groupObj = await groupRepository.findOneBy({
    id: req.body.id
  })
  if (!groupObj) {
    throw '群组不存在'
  }
  return { groupObj, groupRepository }
}

export const checkGroupExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Group)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '群组不存在'
  }
}
