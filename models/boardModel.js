import { Schema, model } from "mongoose";

const boardShcema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "default.jpg",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false }
);

export const BoardModel = model("Board", boardShcema);
