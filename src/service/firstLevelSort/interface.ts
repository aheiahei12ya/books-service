import { body, cookie } from 'express-validator'

export const firstLevelSortListInterface = [body('parentId').isString()]

export const firstLevelSortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('parentId').isString()
]

export const firstLevelSortDetailInterface = [
  body('parentId').isString(),
  body('id').isString()
]

export const firstLevelSortModifyInterface = [
  body('parentId').isString(),
  body('id').isString()
]

export const firstLevelSortRemoveInterface = [
  body('parentId').isString(),
  body('id').isString()
]
