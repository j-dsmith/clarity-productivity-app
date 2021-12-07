import mongoose from 'mongoose';
const { Schema } = mongoose;
import noteSchema from './note';

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  notes: { type: [noteSchema], default: [] },
});

export default projectSchema;
