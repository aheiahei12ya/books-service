import { body, cookie } from 'express-validator'

export const userSettingListInterface = [cookie('uid').isString()]

export const userSettingCreateInterface = [
  cookie('uid').isString(),
  body('incomeLedgerId').isString(),
  body('expenseLedgerId').isString(),
  body('mode').isNumeric(),
  body('automatic').isBoolean()
]

export const userSettingDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const userSettingModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const userSettingRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
