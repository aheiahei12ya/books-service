import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const handler = {
  apply: async function <T>(
    target: (req: Request, res: Response) => Promise<{ message?: string } & T>,
    thisArg: any,
    argumentsList: [Request, Response]
  ) {
    const [req, res] = argumentsList
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    let result, success, message, errorCode

    try {
      result = await target(req, res)
      success = true
      message = result.message || ''

      if (Reflect.has(result, 'success')) {
        Reflect.deleteProperty(result, 'success')
      }

      if (Reflect.has(result, 'message')) {
        Reflect.deleteProperty(result, 'message')
      }
    } catch (errCode) {
      success = false
      errorCode = errCode
    } finally {
      res.send({
        success: success,
        message: message,
        errorCode,
        data: result
      })
    }
  }
}
