import express, { Response, Request, Application } from 'express'
import cors from 'cors'
import MainRouter from './app/routes'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// whole project router call here
app.use('/api', MainRouter)

// check routing
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello Developer!!',
  })
})
export default app
