import mongoose from 'mongoose';
const { Schema } = mongoose;
import noteSchema from './note';

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  notes: { type: [noteSchema], default: [] },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default projectSchema;
