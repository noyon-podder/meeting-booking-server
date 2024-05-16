import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

// connect database
async function main() {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Database Connection Successfully 💕')
    })

    mongoose.connection.on('error', (err) => {
      console.error('Database connection internally Failed: ', err)
    })

    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`server running ${config.port}`)
    })
  } catch (err) {
    console.log('Database connection failed: ', err)
    process.exit(1)
  }
}

main()
