import { body, cookie } from 'express-validator'

export const groupUserListInterface = [cookie('uid').isString()]

export const groupUserCreateInterface = [
  cookie('uid').isString(),

  body('groupId').isString(),

  body('invitorId').isString(),
  body('permission').isString()
]

export const groupUserDetailInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupUserModifyInterface = [
  cookie('uid').isString(),
  body('id').isString()
]

export const groupUserRemoveInterface = [
  cookie('uid').isString(),
  body('id').isString()
]
