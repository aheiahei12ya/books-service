import { Request, Response } from 'express'

// import { AppDataSource } from '@/data-source'
// import Account from '@/entity/Account'
import { AccountType } from '@/service/account/types'

const accountList = async (
  req: Request,
  res: Response
): Promise<AccountType[]> => {
  // await AppDataSource.getRepository(Account).create({
  // })
  console.log(req)
  return [
    {
      id: 3,
      name: '1'
    }
  ]
}

export { accountList }
