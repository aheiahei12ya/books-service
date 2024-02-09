import { body, cookie } from 'express-validator'

export const groupListInterface = [cookie('uid').isString()]

export const groupCreateInterface = [
  cookie('uid').isString(),

  body('type').isNumeric(),
  body('name').isString(),
  body('icon').isString(),

  body('allowSearch').isBoolean(),
  body('joinPermission').isBoolean(),
  body('inviteKey').isString()
]

export const groupDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
