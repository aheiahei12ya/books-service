import { body, cookie } from 'express-validator'

export const groupLedgerListInterface = [cookie('uid').isString()]

export const groupLedgerCreateInterface = [
  cookie('uid').isString(),

  body('groupId').isString(),
  body('ownerId').isString(),

  body('lid').isString()
]

export const groupLedgerDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupLedgerModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupLedgerRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
