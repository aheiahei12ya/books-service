import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const handler = {
  apply: async function <T>(
    target: (req: Request, res: Response) => T,
    thisArg: any,
    argumentsList: [Request, Response]
  ) {
    const [req, res] = argumentsList
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const result = await target(req, res)
    res.send({
      success: true,
      data: result
    })
  }
}
