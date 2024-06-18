import AppError from '../../errors/AppError'
import { TUser } from '../user/user.interface'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'

// create a new user
const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)

  return result
}

const loginUserWithEmailAndPassword = async (payload: TLoginUser) => {
  const { email, password } = payload

  const user = await User.findOne({ email })

  if (!user) {
    throw new AppError(404, 'User Not Found')
  }

  return user
}

export const AuthServices = {
  createUserIntoDB,
  loginUserWithEmailAndPassword,
}
