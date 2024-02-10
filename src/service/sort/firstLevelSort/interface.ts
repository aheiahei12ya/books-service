import { body, cookie } from 'express-validator'

export const firstLevelSortListInterface = [body('categoryId').isString()]

export const firstLevelSortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('categoryId').isString()
]

export const firstLevelSortDetailInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const firstLevelSortModifyInterface = [
  body('categoryId').isString(),
  body('id').isString()
]

export const firstLevelSortRemoveInterface = [
  body('categoryId').isString(),
  body('id').isString()
]
