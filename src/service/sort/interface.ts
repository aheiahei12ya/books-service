import { body, cookie } from 'express-validator'

export const sortListInterface = [body('categoryId').isString()]

export const sortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('categoryId').isString()
]

export const sortDetailInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const sortModifyInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const sortRemoveInterface = [
  body('categoryId').isString(),
  body('id').isString()
]
