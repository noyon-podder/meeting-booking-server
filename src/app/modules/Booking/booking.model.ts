import { model, Schema } from 'mongoose'
import { TBooking } from './booking.interface'

const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    slots: {
      type: [Schema.Types.ObjectId],
      required: true,
    },
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
)

export const Booking = model('Booking', bookingSchema)
