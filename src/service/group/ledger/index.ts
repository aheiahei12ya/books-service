import { Request, Response } from 'express'

import { AppDataSource } from '@/data-source'
import { GroupLedger } from '@/entity/Group'
import { getGroupLedgerById } from '@/service/group/utils'
import { createUUIDWithUID } from '@/util'

export const groupLedgerList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupLedger)

  return await repository.findBy({
    groupId: req.body.groupId
  })
}

export const groupLedgerCreate = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(GroupLedger)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const groupLedger = repository.create({
    id: uuid,

    groupId: req.body.groupId,
    ownerId: req.cookies.uid,

    ledgerId: req.body.lid
  })

  await repository.save(groupLedger)

  return {
    id: groupLedger.id
  }
}

export const groupLedgerDetail = async (req: Request, res: Response) => {
  const { groupLedgerObj } = await getGroupLedgerById(req)
  return groupLedgerObj
}

export const groupLedgerModify = async (req: Request, res: Response) => {
  const { groupLedgerObj, groupLedgerRepository } =
    await getGroupLedgerById(req)
  const newGroupLedger = groupLedgerRepository.merge(groupLedgerObj, req.body)
  await groupLedgerRepository.save(newGroupLedger)
  return {
    message: '群组账本修改成功'
  }
}

export const groupLedgerRemove = async (req: Request, res: Response) => {
  const { groupLedgerObj, groupLedgerRepository } =
    await getGroupLedgerById(req)
  await groupLedgerRepository.remove(groupLedgerObj)
  return {
    message: '群组账本已删除'
  }
}
