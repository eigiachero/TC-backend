import { NextFunction, Request, Response } from 'express'
import { json } from 'stream/consumers'
import { AnyZodObject } from 'zod'

// Utils
export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body

    try {
      await schema.parseAsync(data)
      return next()
    } catch (error) {
      return res.status(400).json(error)
    }
  }
