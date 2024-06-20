import { Router } from 'express'
import { SlotControllers } from './slot.controller'
import auth from '../../middleware/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post('/', auth(USER_ROLE.admin), SlotControllers.createSlot)

router.get('/availability', SlotControllers.getAllAvailableSlots)

export const SlotRoutes = router
