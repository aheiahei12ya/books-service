import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { Group } from '@/entity/Group'
import { getGroupById } from '@/service/group/utils'
import { createUUIDWithUID } from '@/util'

export const groupList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Group)

  return await repository.findBy({
    allowSearch: true
  })
}

export const groupCreate = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Group)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const group = repository.create({
    id: uuid,

    type: req.body.type,
    name: req.body.name,
    icon: req.body.icon,

    allowSearch: req.body.allowSearch,
    joinPermission: req.body.joinPermission,
    inviteKey: req.body.inviteKey,
    creatorId: req.cookies.uid
  })

  await repository.save(group)

  return {
    id: group.id
  }
}

export const groupDetail = async (req: Request, res: Response) => {
  const { groupObj } = await getGroupById(req)
  return groupObj
}

export const groupModify = async (req: Request, res: Response) => {
  const { groupObj, groupRepository } = await getGroupById(req)
  const newGroup = groupRepository.merge(groupObj, req.body)
  await groupRepository.save(newGroup)
  return {
    message: '群组信息修改成功'
  }
}

export const groupRemove = async (req: Request, res: Response) => {
  const { groupObj, groupRepository } = await getGroupById(req)
  await groupRepository.remove(groupObj)
  return {
    message: '群组信息已删除'
  }
}
