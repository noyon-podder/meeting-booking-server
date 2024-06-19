import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import { SlotServices } from './slot.service'
import sendResponse from '../../utils/sendResponse'

const createSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.createSlotIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slot Create Successfully',
    data: result,
  })
})

export const SlotControllers = {
  createSlot,
}
