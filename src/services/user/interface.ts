import { body } from 'express-validator'

export const userCreateInterface = [
  body('nickname').notEmpty(),
  body('password').notEmpty(),
  body('avatar').notEmpty()
]
