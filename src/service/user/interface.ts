import { body, cookie } from 'express-validator'

export const userLoginInterface = [
  body('account').isString(),
  body('password').isString()
]

export const userCreateInterface = [
  body('account').isString(),
  body('password').isString(),
  body('nickname').isString(),
  body('avatar').isString()
]

export const userInfoInterface = [cookie('uid').isString()]

export const userModifyInterface = [cookie('uid').isString()]

export const userRemoveInterface = [cookie('uid').isString()]
