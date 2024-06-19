import { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { RoomValidations } from './room.validation'
import { RoomControllers } from './room.controller'

const router = Router()

router.post(
  '/',
  validateRequest(RoomValidations.roomValidationSchema),
  RoomControllers.createRoom,
)
export const RoomRoutes = router
