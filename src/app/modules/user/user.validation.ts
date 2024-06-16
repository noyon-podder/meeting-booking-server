import { z } from 'zod'

const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  phone: z
    .number()
    .int()
    .nonnegative('Phone number must be a positive integer'),
  address: z.string().min(1, 'Address is required'),
  role: z.enum(['user', 'admin']).default('user'),
})

export const UserValidations = {
  userValidationSchema,
}
