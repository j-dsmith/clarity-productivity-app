import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

export default taskSchema;
