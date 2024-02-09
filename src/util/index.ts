import { createHash } from 'crypto'
import { uuidv7 } from 'uuidv7'

export const createUUIDWithUID = (uid: string) => {
  return createHash('sha256').update(`${uuidv7()}-${uid}`).digest('hex')
}