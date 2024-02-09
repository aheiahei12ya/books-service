import { body, cookie } from 'express-validator'

export const categoryListInterface = [cookie('uid').isString()]

export const categoryCreateInterface = [
  body('token').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric()
]

export const categoryDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const categoryModifyInterface = [
  body('token').isString(),
  body('id').isString()
]

export const categoryRemoveInterface = [
  body('token').isString(),
  body('id').isString()
]
