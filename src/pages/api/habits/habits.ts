import mongoose, { Schema } from 'mongoose';

export const HabitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.habits || mongoose.model('habits', HabitSchema);
