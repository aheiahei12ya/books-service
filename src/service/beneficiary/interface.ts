import { body, cookie } from 'express-validator'

export const beneficiaryListInterface = [
  cookie('uid').isString(),
  body('lid').isString()
]

export const beneficiaryCreateInterface = [
  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  cookie('uid').isString(),
  body('lid').isString(),

  body('relationship').isString()
]

export const beneficiaryDetailInterface = [
  cookie('uid').isString(),
  body('lid').isString(),
  body('id').isString()
]

export const beneficiaryModifyInterface = [
  cookie('uid').isString(),
  body('lid').isString(),
  body('id').isString()
]

export const beneficiaryRemoveInterface = [
  cookie('uid').isString(),
  body('lid').isString(),
  body('id').isString()
]
