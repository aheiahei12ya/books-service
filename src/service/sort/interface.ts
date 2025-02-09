import { body, cookie } from 'express-validator'

export const sortListInterface = [body('sortId').isString()]

export const sortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),
  body('color').isString(),

  body('sortId').isString()
]

export const sortDetailInterface = [
  body('sortId').isString(),
  body('id').isString()
]

export const sortModifyInterface = [
  body('sortId').isString(),
  body('id').isString()
]

export const sortRemoveInterface = [
  body('sortId').isString(),
  body('id').isString()
]
