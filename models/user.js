import mongoose from 'mongoose';
const { Schema } = mongoose;
import projectSchema from './project';
import taskSchema from './task';
import deckSchema from './deck';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isGuest: {
    type: Boolean,
    required: true,
    default: false,
  },
  projects: {
    type: [projectSchema],
    default: [],
  },
  tasks: {
    type: [taskSchema],
    default: [],
  },
  tasksCompleted: {
    type: Number,
    default: 0,
  },
  decks: {
    type: [deckSchema],
    default: [],
  },
  pomodorosCompleted: { type: Number, default: 0 },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
