import { Request, Response } from 'express'

import { AccountType } from '@/services/account/types'

const accountList = (req: Request, res: Response): AccountType[] => {
  return [
    {
      id: 3,
      name: '1'
    }
  ]
}

export { accountList }
