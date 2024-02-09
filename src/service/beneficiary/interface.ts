import { body, cookie } from 'express-validator'

export const beneficiaryListInterface = [body('lid').isString()]

export const beneficiaryCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('lid').isString(),

  body('relationship').isString()
]

export const beneficiaryDetailInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const beneficiaryModifyInterface = [
  body('lid').isString(),
  body('id').isString()
]

export const beneficiaryRemoveInterface = [
  body('lid').isString(),
  body('id').isString()
]
