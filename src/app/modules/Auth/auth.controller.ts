import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthServices } from './auth.service'

// create a user
const createUser = catchAsync(async (req, res) => {
  const data = req.body

  const result = await AuthServices.createUserIntoDB(data)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User Create Successfully',
    data: result,
  })
})

export const AuthControllers = {
  createUser,
}
