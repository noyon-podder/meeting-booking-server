import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password
        delete ret.isDeleted
        return ret
      },
    },
  },
)

// Pre middleware to exclude documents where isDeleted is true
userSchema.pre('find', function () {
  this.where({ isDeleted: { $ne: true } })
})

userSchema.pre('findOne', function () {
  this.where({ isDeleted: { $ne: true } })
})

export const User = model<TUser>('User', userSchema)
