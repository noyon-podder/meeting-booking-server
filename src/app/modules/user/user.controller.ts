import { Request, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

// create a user
const createUser = catchAsync(async (req, res) => {
  const data = req.body

  const result = await UserService.createUserIntoDB(data)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully',
    data: result,
  })
})

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
