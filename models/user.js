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
  },
  projects: {
    type: [projectSchema],
    default: [],
  },
  tasks: {
    type: [taskSchema],
    default: [],
  },
  decks: {
    type: [deckSchema],
    default: [],
  },
  pomodoroCycles: { type: Number, default: 0 },
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
