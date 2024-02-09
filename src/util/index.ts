import { createHash } from 'crypto'
import { uuidv7 } from 'uuidv7'

import { UNIQUE_TOKEN } from '@/constant'

export const createUUIDWithUID = (uid: string) => {
  return createHash('sha256').update(`${uuidv7()}-${uid}`).digest('hex')
}

export const checkUniqueToken = (token: string) => {
  if (token === UNIQUE_TOKEN) return
  throw 'token 不合法'
}
