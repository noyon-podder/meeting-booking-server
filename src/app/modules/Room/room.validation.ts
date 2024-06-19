import { z } from 'zod'

const roomValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    roomNo: z
      .number()
      .int('Room number must be an integer')
      .nonnegative('Room number must be non-negative'),
    capacity: z
      .number()
      .int('Capacity must be an integer')
      .nonnegative('Capacity must be non-negative'),
    pricePerSlot: z.number().nonnegative('Price per slot must be non-negative'),
    amenities: z.array(z.string().min(1, 'Amenity must be a non-empty string')),
    isDeleted: z.boolean().default(false),
  }),
})

export const RoomValidations = {
  roomValidationSchema,
}
