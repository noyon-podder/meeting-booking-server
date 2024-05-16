import express, { Response, Request, Application } from 'express'
import cors from 'cors'

const app: Application = express()

//parser
app.use(express.json())
app.use(cors())

// check routing
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello Developer!!',
  })
})
export default app
