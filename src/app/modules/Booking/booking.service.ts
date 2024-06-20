import AppError from '../../errors/AppError'
import { Room } from '../Room/room.model'
import { Slot } from '../Slot/slot.model'
import { User } from '../user/user.model'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'

const createBookingIntoDB = async (payload: TBooking) => {
  const { room, slots, user, date } = payload

  const isRoomExist = await Room.findById(room)

  if (!isRoomExist) {
    throw new AppError(404, 'Room not found')
  }

  const isUserExist = await User.findById(user)
  if (!isUserExist) {
    throw new AppError(404, 'User not found')
  }

  const slotDocs = await Slot.find({ _id: { $in: slots }, room, date })

  if (slotDocs.length !== slots.length) {
    throw new AppError(
      400,
      'Slot are not valid or does not match date and room',
    )
  }

  // check slots are not book
  for (const slot of slotDocs) {
    if (slot.isBooked) {
      throw new AppError(400, 'Slot are already booked')
    }
  }

  // calculate the total price
  const totalAmount = isRoomExist.pricePerSlot * slots.length

  const bookingData = {
    date,
    slots,
    room,
    totalAmount,
    user,
  }

  const newBooking = await Booking.create(bookingData)

  await Slot.updateMany({ _id: { $in: slots } }, { isBooked: true })

  // populate room, user and slot
  const result = await Booking.findById(newBooking._id)
    .populate('slots')
    .populate('room')
    .populate('user')
    .exec()

  return result
}

export const BookingServices = {
  createBookingIntoDB,
}
