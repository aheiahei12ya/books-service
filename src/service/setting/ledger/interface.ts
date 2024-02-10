import { body, cookie } from 'express-validator'

export const ledgerSettingListInterface = [
  cookie('uid').isString(),
  body('lid').isString(),

]

export const ledgerSettingCreateInterface = [
  cookie('uid').isString(),
  body('lid').isString(),
  body('categoryId').isString(),
  body('accountId').isString(),
  body('methodId').isString(),
  body('beneficiaryId').isString(),
  body('channelId').isString(),
  body('firstLevelSortId').isString(),
  body('secondLevelSortId').isString()
]

export const ledgerSettingDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const ledgerSettingModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const ledgerSettingRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
