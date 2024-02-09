import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { GroupUser } from '@/entity/Group'
import { getGroupUserById } from '@/service/group/utils'
import { createUUIDWithUID } from '@/util'

export const groupUserList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupUser)

  return await repository.findBy({
    groupId: req.body.groupId
  })
}

export const groupUserCreate = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupUser)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const groupUser = repository.create({
    id: uuid,

    groupId: req.body.groupId,
    userId: req.cookies.uid,

    invitorId: req.body.invitorId,
    permission: req.body.permission
  })

  await repository.save(groupUser)

  return {
    id: groupUser.id
  }
}

export const groupUserDetail = async (req: Request, res: Response) => {
  const { groupUserObj } = await getGroupUserById(req)
  return groupUserObj
}

export const groupUserModify = async (req: Request, res: Response) => {
  const { groupUserObj, groupUserRepository } = await getGroupUserById(req)
  const newGroupUser = groupUserRepository.merge(groupUserObj, req.body)
  await groupUserRepository.save(newGroupUser)
  return {
    message: '群组用户修改成功'
  }
}

export const groupUserRemove = async (req: Request, res: Response) => {
  const { groupUserObj, groupUserRepository } = await getGroupUserById(req)
  await groupUserRepository.remove(groupUserObj)
  return {
    message: '群组用户已删除'
  }
}
