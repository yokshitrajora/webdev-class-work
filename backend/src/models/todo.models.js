import mongoose from "mongoose"; 
// import User from "./user.models"

const todoSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

export const Todo = mongoose.model("Todo", todoSchema);