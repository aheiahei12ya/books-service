import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { GroupAccount } from '@/entity/Group'
import { getGroupAccountById } from '@/service/group/utils'
import { createUUIDWithUID } from '@/util'

export const groupAccountList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupAccount)

  return await repository.findBy({
    groupId: req.body.groupId
  })
}

export const groupAccountCreate = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupAccount)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const groupAccount = repository.create({
    id: uuid,

    groupId: req.body.groupId,
    ownerId: req.cookies.uid,

    accountId: req.body.accountId
  })

  await repository.save(groupAccount)

  return {
    id: groupAccount.id
  }
}

export const groupAccountDetail = async (req: Request, res: Response) => {
  const { groupAccountObj } = await getGroupAccountById(req)
  return groupAccountObj
}

export const groupAccountModify = async (req: Request, res: Response) => {
  const { groupAccountObj, groupAccountRepository } =
    await getGroupAccountById(req)
  const newGroupAccount = groupAccountRepository.merge(
    groupAccountObj,
    req.body
  )
  await groupAccountRepository.save(newGroupAccount)
  return {
    message: '群组账户修改成功'
  }
}

export const groupAccountRemove = async (req: Request, res: Response) => {
  const { groupAccountObj, groupAccountRepository } =
    await getGroupAccountById(req)
  await groupAccountRepository.remove(groupAccountObj)
  return {
    message: '群组账户已删除'
  }
}
