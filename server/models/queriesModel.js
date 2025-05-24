import mongoose from "mongoose";

const QueriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    phone: { type: String, required: true },
    website: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const queriesModel = mongoose.model("queries", QueriesSchema);

export default queriesModel;
