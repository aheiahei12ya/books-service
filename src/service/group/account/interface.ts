import { body, cookie } from 'express-validator'

export const groupAccountListInterface = [cookie('uid').isString()]

export const groupAccountCreateInterface = [
  cookie('uid').isString(),

  body('groupId').isString(),
  body('ownerId').isString(),

  body('accountId').isString()
]

export const groupAccountDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupAccountModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupAccountRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
