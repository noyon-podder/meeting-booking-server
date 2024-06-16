import { ErrorRequestHandler } from 'express'

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  })

  next()
}

export default globalErrorHandler
