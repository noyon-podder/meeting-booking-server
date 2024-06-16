import { TUser } from './user.interface'
import { User } from './user.model'

const createUserIntoDB = async (student: TUser) => {
  const result = await User.create(student)

  return result
}

const getAllStudents = async () => {
  const result = await User.find({})

  return result
}

const getSingleStudent = async (id: string) => {
  const result = await User.find({ id })

  return result
}

export const UserService = {
  createUserIntoDB,
  getAllStudents,
  getSingleStudent,
}
