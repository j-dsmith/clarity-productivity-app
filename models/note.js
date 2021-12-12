import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: '',
    },
    content: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default noteSchema;
