import { body, cookie } from 'express-validator'

export const monthlyStatisticListInterface = [body('lid').isString()]

export const monthlyStatisticCreateInterface = [
  cookie('uid').isString(),
  body('lid').isString(),

  body('year').isString(),
  body('month').isString(),
  body('expense').isString(),
  body('income').isString(),
  body('loan').isString()
]

export const monthlyStatisticDetailInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const monthlyStatisticModifyInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const monthlyStatisticRemoveInterface = [
  body('lid').isString(),
  body('id').isString()
]
