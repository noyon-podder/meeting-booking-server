import { IStudent } from './user.interface'
import { Student } from './user.model'

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student)

  return result
}

const getAllStudents = async () => {
  const result = await Student.find({})

  return result
}

const getSingleStudent = async (id: string) => {
  const result = await Student.find({ id })

  return result
}

export const UserService = {
  createStudentIntoDB,
  getAllStudents,
  getSingleStudent,
}
