import { body, cookie } from 'express-validator'

export const channelListInterface = [body('categoryId').isString()]

export const channelCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('lid').isString(),
  body('categoryId').isString()
]

export const channelDetailInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const channelModifyInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const channelRemoveInterface = [
  body('categoryId').isString(),
  body('id').isString()
]
