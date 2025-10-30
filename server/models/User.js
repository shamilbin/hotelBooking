import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true , trim: true },
  image: { type: String, required: true },
  role: { type: String, enum: ["user","hotelOwner"] , default:"user" },
  recentSearchCities: [{ type: String, required: true }],
},{ timestamps: true });


const userModel = mongoose.model("User", userSchema);

export default userModel;
