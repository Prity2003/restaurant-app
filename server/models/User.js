import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import validator from 'validator';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: [true, "email can't be empty"],
      validate: {
        validator(email) {
          return validator.isEmail(email);
        },
        message: 'Please enter valid email',
      },
    },
    role: {
      type: String,
      enum: ['user'],
      required: [true, "role can't be empty"],
    },
    name: {
      type: String,
      required: [true, "name can't be empty"],
    },
    password: {
      type: String,
      required: [true, "password can't be empty"],
    },
    profileImage: {
      type: String,
    },
    bio: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postleCode: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema, 'users');
export default User;
