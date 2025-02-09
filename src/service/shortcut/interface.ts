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
  body('sortId').isString()
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
