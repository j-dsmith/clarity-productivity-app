import mongoose from 'mongoose';
const { Schema } = mongoose;
import projectSchema from './project';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  projects: {
    type: [projectSchema],
    default: [],
  },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
