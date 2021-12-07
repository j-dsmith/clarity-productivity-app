import mongoose from 'mongoose';
const { Schema } = mongoose;
import cardSchema from './card';

const deckSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cards: { type: [cardSchema], default: [] },
});

export default deckSchema;
