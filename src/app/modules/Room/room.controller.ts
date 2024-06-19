import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { RoomServices } from './room.service'

const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Room Create Successfully',
    data: result,
  })
})

export const RoomControllers = {
  createRoom,
}
