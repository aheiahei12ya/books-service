import { body, cookie } from 'express-validator'

export const secondLevelSortListInterface = [body('parentSortId').isString()]

export const secondLevelSortCreateInterface = [
  cookie('uid').isString(),

  body('name').isString(),
  body('icon').isString(),
  body('rank').isNumeric(),

  body('parentSortId').isString()
]

export const secondLevelSortDetailInterface = [
  body('parentSortId').isString(),
  body('id').isString()
]

export const secondLevelSortModifyInterface = [
  body('parentSortId').isString(),
  body('id').isString()
]

export const secondLevelSortRemoveInterface = [
  body('parentSortId').isString(),
  body('id').isString()
]
