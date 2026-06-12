import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  userId:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username:   { type: String, required: true },
  score:      { type: Number, required: true },
  total:      { type: Number, required: true },
  category:   { type: String, required: true },
  difficulty: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Score', scoreSchema);