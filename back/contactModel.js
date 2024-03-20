import mongoose from "mongoose";

const contactShema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const contacts = new mongoose.model("contacts", contactShema);

export default contacts;
