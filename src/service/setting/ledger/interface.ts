import { body, cookie } from 'express-validator'

export const ledgerSettingListInterface = [
  cookie('uid').isString(),
  body('lid').isString()
]

export const ledgerSettingCreateInterface = [
  cookie('uid').isString(),
  body('lid').isString(),
  body('categoryId').isString(),
  body('accountId').isString(),
  body('methodId').isString(),
  body('sortId').isString(),
]

export const ledgerSettingDetailInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const ledgerSettingModifyInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const ledgerSettingRemoveInterface = [
  body('lid').isString(),
  body('id').isString()
]
