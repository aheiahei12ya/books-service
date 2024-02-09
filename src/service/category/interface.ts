import { body, cookie } from 'express-validator'

export const categoryListInterface = [cookie('uid').isString()]

export const categoryCreateInterface = [
  body('token').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('lid').isString()
]

export const categoryDetailInterface = [
  body('lid').isNumeric(),
  body('id').isString()
]

export const categoryModifyInterface = [
  body('lid').isNumeric(),
  body('id').isString()
]

export const categoryRemoveInterface = [
  body('token').isString(),
  body('lid').isNumeric(),
  body('id').isString()
]
