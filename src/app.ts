require('./alias')

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import createError from 'http-errors'
import logger from 'morgan'

import { AppDataSource } from '@/data-source'
import { routes } from '@/route'
import { handler } from '@/util/response'

const app = express()

app
  .use(cors())
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())

routes.forEach(({ child, path }) => {
  const router = express.Router()
  child.forEach((route: any) => {
    router[route.method as 'post' | 'get'](
      route.path,
      route?.validator || [],
      new Proxy(route.action, handler)
    )
  })
  app.use(path, router)
})

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404))
})

// error handler
app.use(function (
  err: { message: any; status: any },
  req: { app: { get: (arg0: string) => string } },
  res: {
    locals: { message: any; error: any }
    status: (arg0: any) => void
    render: (arg0: string) => void
  },
  next: any
) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })

export { app }
