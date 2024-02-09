import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Group, GroupAccount, GroupLedger, GroupUser } from '@/entity/Group'

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

export const getGroupUserById = async (req: Request) => {
  const groupUserRepository = AppDataSource.getRepository(GroupUser)
  const groupUserObj = await groupUserRepository.findOneBy({
    id: req.body.id
  })
  if (!groupUserObj) {
    throw '群组用户不存在'
  }
  return { groupUserObj, groupUserRepository }
}

export const getGroupLedgerById = async (req: Request) => {
  const groupLedgerRepository = AppDataSource.getRepository(GroupLedger)
  const groupLedgerObj = await groupLedgerRepository.findOneBy({
    id: req.body.id
  })
  if (!groupLedgerObj) {
    throw '群组账本不存在'
  }
  return { groupLedgerObj, groupLedgerRepository }
}

export const getGroupAccountById = async (req: Request) => {
  const groupAccountRepository = AppDataSource.getRepository(GroupAccount)
  const groupAccountObj = await groupAccountRepository.findOneBy({
    id: req.body.id
  })
  if (!groupAccountObj) {
    throw '群组账户不存在'
  }
  return { groupAccountObj, groupAccountRepository }
}
