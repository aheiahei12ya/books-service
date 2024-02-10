import { body, cookie } from 'express-validator'

export const shortcutListInterface = [
  cookie('uid').isString(),
  body('lid').isString()
]

export const shortcutCreateInterface = [
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

export const shortcutDetailInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const shortcutModifyInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const shortcutRemoveInterface = [
  body('lid').isString(),
  body('id').isString()
]
