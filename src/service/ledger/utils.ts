import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Ledger } from '@/entity/Ledger'

export const getLedgerById = async (req: Request) => {
  const ledgerRepository = AppDataSource.getRepository(Ledger)
  const ledgerObj = await ledgerRepository.findOneBy({
    id: req.body.id,
    userId: req.cookies.uid
  })
  if (!ledgerObj) {
    throw '账本不存在'
  }
  return { ledgerObj, ledgerRepository }
}

export const checkLedgerExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Ledger)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '账本不存在'
  }
}
