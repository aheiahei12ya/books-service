import { body, cookie } from 'express-validator'

export const accountListInterface = [cookie('uid').isString()]

export const accountCreateInterface = [
  cookie('uid').isString(),

  body('type').isNumeric(),
  body('balance').isString(),
  body('billDate').isNumeric(),
  body('repaymentTime').isNumeric(),

  body('totalIncome').isString(),
  body('totalExpense').isString()
]

export const accountDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const accountModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const accountRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
