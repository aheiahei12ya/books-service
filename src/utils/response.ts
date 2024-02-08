import { Request, Response } from 'express'

export const handler = {
  apply: function <T>(
    target: (req: Request, res: Response) => T,
    thisArg: any,
    argumentsList: [Request, Response]
  ) {
    const [req, res] = argumentsList
    const result = target(req, res)
    res.send({
      success: true,
      data: result
    })
  }
}
