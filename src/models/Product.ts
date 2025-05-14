import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
    get: (v: Schema.Types.Decimal128) => parseFloat(v.toString()),
  },
  description: { type: String, required: true },
  image: { type: String, required: true }
}, {
  toJSON: { getters: true },
  toObject: { getters: true },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);