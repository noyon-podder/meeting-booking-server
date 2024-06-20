import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.service'

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBookingIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slot Create Successfully',
    data: result,
  })
})

export const BookingControllers = {
  createBooking,
}
