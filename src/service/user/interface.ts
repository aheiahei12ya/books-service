import { body, cookie } from 'express-validator'

export const userLoginInterface = [
  body('account').notEmpty().isString(),
  body('password').notEmpty().isString()
]

export const userCreateInterface = [
  body('account').notEmpty().isString(),
  body('password').notEmpty().isString(),
  body('nickname').notEmpty().isString(),
  body('avatar').notEmpty().isString()
]

export const userInfoInterface = [cookie('uid').notEmpty().isString()]

export const userModifyInterface = [cookie('uid').notEmpty().isString()]

export const userRemoveInterface = [cookie('uid').notEmpty().isString()]
