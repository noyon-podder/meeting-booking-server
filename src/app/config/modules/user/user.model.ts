import mongoose from 'mongoose'
import { IStudent, Guardian, LocalGuardian } from './user.interface'

const guardianSchema = new mongoose.Schema<Guardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
})

const localGuardianSchema = new mongoose.Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})

const studentSchema = new mongoose.Schema<IStudent>(
  {
    id: { type: String },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    email: { type: String, unique: true, required: true },
    contactNo: { type: String, required: true },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    emergencyContactNo: { type: String, required: true },
    dateOfBirth: {
      type: String,
      required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    localGuardian: localGuardianSchema,
    guardian: guardianSchema,
    profileImage: { type: String },
    isActive: {
      type: String,
      enum: ['active', 'inactive'],
    },
  },
  { timestamps: true },
)

export const Student = mongoose.model<IStudent>('Student', studentSchema)
