import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, time: true },
  email: { type: String, required: true, unique: true, time: true, lowercase: true },
  passwordHash: { type: String, required: true},
}, { timestamps: true });

export default mongoose.model('User', userSchema);
