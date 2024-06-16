import { Request, Response } from 'express'
import { UserService } from './user.service'

// create a user
const createUser = async (req: Request, res: Response) => {
  const data = req.body

  const result = await UserService.createUserIntoDB(data)

  res.status(200).json({
    success: true,
    message: 'Student Create Successfully',
    data: result,
  })
}

// get all students
const getAllStudents = async (req: Request, res: Response) => {
  const result = await UserService.getAllStudents()

  res.status(200).json({
    success: true,
    message: 'Student Create Successfully',
    data: result,
  })
}

// get single student

const getSingleStudent = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await UserService.getSingleStudent(id)

  res.status(200).json({
    success: true,
    message: 'Student Create Successfully',
    data: result,
  })
}
export const UserControllers = {
  createUser,
  getAllStudents,
  getSingleStudent,
}
