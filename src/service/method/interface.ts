import { body, cookie } from 'express-validator'

export const methodListInterface = [body('categoryId').isString()]

export const methodCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('categoryId').isString()
]

export const methodDetailInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const methodModifyInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const methodRemoveInterface = [
  body('categoryId').isString(),
  body('id').isString()
]
