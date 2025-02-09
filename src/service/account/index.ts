import { Request, Response } from 'express'

import { ACCOUNT_STATUS } from '@/constant'
import { AppDataSource } from '@/data-source'
import { Account } from '@/entity/Account'
import { getAccountById } from '@/service/account/utils'
import { checkUserExistsById } from '@/service/user/utils'
import { createUUIDWithUID } from '@/util'

export const accountList = async (req: Request, res: Response) => {
  const repository = AppDataSource.getRepository(Account)

  return await repository.findBy({
    userId: req.cookies.uid
  })
}

export const accountCreate = async (req: Request, res: Response) => {
  await checkUserExistsById(req.cookies.uid)

  const repository = AppDataSource.getRepository(Account)

  let uuid = createUUIDWithUID(req.cookies.uid)

  while (await repository.existsBy({ id: uuid })) {
    uuid = createUUIDWithUID(req.cookies.uid)
  }

  const account = repository.create({
    id: uuid,

    name: req.body.name,
    icon: req.body.icon,
    rank: req.body.rank,
    usage: 0,

    userId: req.cookies.uid,
    type: req.body.type,
    balance: req.body.balance || '0',
    billDate: req.body.billDate,
    repaymentTime: req.body.repaymentTime,
    status: ACCOUNT_STATUS.ACTIVATED,
    totalIncome: req.body.totalIncome || '0',
    totalExpense: req.body.totalExpense || '0'
  })

  await repository.save(account)

  return {
    id: account.id
  }
}

export const accountDetail = async (req: Request, res: Response) => {
  const { accountObj } = await getAccountById(req)
  return accountObj
}

export const accountModify = async (req: Request, res: Response) => {
  const { accountObj, accountRepository } = await getAccountById(req)
  const newAccount = accountRepository.merge(accountObj, req.body)
  await accountRepository.save(newAccount)
  return {
    message: '账户信息修改成功'
  }
}

export const accountRemove = async (req: Request, res: Response) => {
  const { accountObj, accountRepository } = await getAccountById(req)
  await accountRepository.remove(accountObj)
  return {
    message: '账户信息已删除'
  }
}
