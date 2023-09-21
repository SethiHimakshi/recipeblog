import mongoose, { Mongoose } from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ingredients: [{ type: String, required: true }],
  instructions:{type:String,required:true},
  imageUrl:{type:String,required:true},
  cookingTime:{type:Number,required:true},
  userOwner:{type:mongoose.Schema.Types.ObjectId,ref:"User", required:true}

});

export const RecipesModel = mongoose.model("recipe", RecipeSchema);