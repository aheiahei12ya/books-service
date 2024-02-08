import { Request, Response } from 'express'

export type ChildRouteType = {
  method: 'post' | 'get'
  path: string
  action: (req: Request, res: Response) => any
  validator?: []
}
