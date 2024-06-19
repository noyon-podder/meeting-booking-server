import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/Auth/auth.route'
import { RoomRoutes } from '../modules/Room/room.route'

const MainRouter = express.Router()

const moduleRoutes = [
  { path: '/auth', routes: AuthRoutes },
  { path: '/user', routes: UserRoutes },
  { path: '/rooms', routes: RoomRoutes },
]

moduleRoutes.forEach((route) => MainRouter.use(route.path, route.routes))

export default MainRouter
