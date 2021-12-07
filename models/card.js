import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default cardSchema;
