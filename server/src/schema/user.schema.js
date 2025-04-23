import { Schema } from "mongoose";

const User = new Schema({
    nickname: { type: String, required: true },
    password: { type: String, required: true }
})