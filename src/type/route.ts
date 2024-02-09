import { Request, Response } from 'express'
import { ValidationChain } from 'express-validator'

export type ChildRouteType = {
  method: 'post' | 'get'
  path: string
  action: (req: Request, res: Response) => any
  validator?: ValidationChain[]
}
