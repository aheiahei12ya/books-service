import { body, cookie } from 'express-validator'

export const ledgerListInterface = [cookie('uid').isString()]

export const ledgerCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('type').isNumeric(),
  body('status').isNumeric(),
  body('share').isBoolean()
]

export const ledgerDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const ledgerModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const ledgerRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
