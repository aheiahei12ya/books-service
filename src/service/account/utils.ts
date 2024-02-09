import { Request } from 'express'

import { AppDataSource } from '@/data-source'
import { Account } from '@/entity/Account'

export const getAccountById = async (req: Request) => {
  const accountRepository = AppDataSource.getRepository(Account)
  const accountObj = await accountRepository.findOneBy({
    id: req.body.id
  })
  if (!accountObj) {
    throw '账户不存在'
  }
  return { accountObj, accountRepository }
}

export const checkAccountExistsById = async (id: string) => {
  const repository = AppDataSource.getRepository(Account)
  const exists = await repository.existsBy({ id })
  if (!exists) {
    throw '账户不存在'
  }
}
