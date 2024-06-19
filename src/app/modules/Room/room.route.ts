import { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { RoomValidations } from './room.validation'
import { RoomControllers } from './room.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/',
  validateRequest(RoomValidations.createRoomValidationSchema),
  RoomControllers.createRoom,
)

router.get('/', auth(USER_ROLE.admin), RoomControllers.getAllRooms)
router.get('/:id', RoomControllers.getSingleRoom)
router.delete('/:id', RoomControllers.roomDelete)

router.put(
  '/:id',
  validateRequest(RoomValidations.updateRoomValidationSchema),
  RoomControllers.roomUpdate,
)

export const RoomRoutes = router
