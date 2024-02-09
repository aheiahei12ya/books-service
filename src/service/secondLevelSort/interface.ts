import { body, cookie } from 'express-validator'

export const secondLevelSortListInterface = [body('parentId').isString()]

export const secondLevelSortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('parentId').isString()
]

export const secondLevelSortDetailInterface = [
  body('parentId').isString(),
  body('id').isString()
]

export const secondLevelSortModifyInterface = [
  body('parentId').isString(),
  body('id').isString()
]

export const secondLevelSortRemoveInterface = [
  body('parentId').isString(),
  body('id').isString()
]
