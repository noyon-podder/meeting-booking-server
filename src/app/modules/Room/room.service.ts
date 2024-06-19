import AppError from '../../errors/AppError'
import { TRoom } from './room.interface'
import { Room } from './room.model'

// create a new room
const createRoomIntoDB = async (payload: TRoom) => {
  const result = await Room.create(payload)
  return result
}

// get all rooms
const getAllRoomsFromDB = async () => {
  const result = await Room.find()

  return result
}

// get all rooms
const getSingleRoomsFromDB = async (id: string) => {
  const isRoomExist = await Room.findOne({ _id: id })

  if (!isRoomExist) {
    throw new AppError(404, 'Room Not Found')
  }
  return isRoomExist
}

// room delete from db
const roomDeleteFromDB = async (id: string) => {
  const result = await Room.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  )

  if (!result) {
    throw new AppError(404, 'Room Not Found')
  }

  return result
}

// room update from db
const roomUpdateFromDB = async (id: string, payload: Partial<TRoom>) => {
  const result = await Room.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })

  return result
}

export const RoomServices = {
  createRoomIntoDB,
  getAllRoomsFromDB,
  getSingleRoomsFromDB,
  roomDeleteFromDB,
  roomUpdateFromDB,
}
