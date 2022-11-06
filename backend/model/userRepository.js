import { Schema, model, ObjectId } from 'mongoose';
const UserSchema = new Schema(
  {
    _id: ObjectId,
    name: String,
    id: String,
    email: String,
    role: String,
    password: String,
  },
  { collection: 'users' }
);
const User = model('user', UserSchema);
export async function findByEmail(email) {
  try {
    return await User.findOne({ email: email });
  } catch (error) {
    console.error(error);
  }
}

export async function findById(id) {
  try {
    return await User.findOne({ id: id });
  } catch (error) {
    console.error(error);
  }
}
