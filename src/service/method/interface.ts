import { body, cookie } from 'express-validator'

export const methodListInterface = [body('methodId').isString()]

export const methodCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('methodId').isString()
]

export const methodDetailInterface = [
  body('methodId').isString(),
  body('id').isString()
]

export const methodModifyInterface = [
  body('methodId').isString(),
  body('id').isString()
]

export const methodRemoveInterface = [
  body('methodId').isString(),
  body('id').isString()
]
