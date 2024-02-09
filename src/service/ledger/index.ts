import { Request, Response } from 'express'

import { LEDGER_STATUS } from '@/constant'
import { AppDataSource } from '@/data-source'
import { Ledger } from '@/entity/Ledger'
import { getLedgerById } from '@/service/ledger/utils'
import { checkUserExistsById } from '@/service/user/utils'
import { createUUIDWithUID } from '@/util'

export const ledgerList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Ledger)

  return await repository.findBy({
    userId: req.cookies.uid
  })
}

export const ledgerCreate = async (req: Request, res: Response) => {
  await checkUserExistsById(req.cookies.uid)

  const repository = AppDataSource.getRepository(Ledger)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const ledger = repository.create({
    id: uuid,
    userId: req.cookies.uid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,

    type: req.body.type,
    status: LEDGER_STATUS.ACTIVATED,
    share: req.body.share
  })

  await repository.save(ledger)

  return {
    id: ledger.id
  }
}

export const ledgerDetail = async (req: Request, res: Response) => {
  const { ledgerObj } = await getLedgerById(req)
  return ledgerObj
}

export const ledgerModify = async (req: Request, res: Response) => {
  const { ledgerObj, ledgerRepository } = await getLedgerById(req)
  const newLedger = ledgerRepository.merge(ledgerObj, req.body)
  await ledgerRepository.save(newLedger)
  return {
    message: '账本信息修改成功'
  }
}

export const ledgerRemove = async (req: Request, res: Response) => {
  const { ledgerObj, ledgerRepository } = await getLedgerById(req)
  await ledgerRepository.remove(ledgerObj)
  return {
    message: '账本已删除'
  }
}
