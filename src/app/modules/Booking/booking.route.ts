import { Router } from 'express'
import { BookingControllers } from './booking.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post('/', auth(USER_ROLE.user), BookingControllers.createBooking)

export const BookingRoutes = router
