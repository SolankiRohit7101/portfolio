import contacts from "./contactModel.js";
import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";
import contactData from "./utils/DataValidation.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import sendmail from "./utils/Nodemailer.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("connect db"))
  .catch((error) => {
    console.log(error);
  });

app.post("/api/contact", async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const validData = await contactData._parse({ name, email, subject, message });
  if (!validData.issues) {
    try {
      const contact = new contacts({
        name,
        email,
        message,
        subject,
      });
      await contact.save();

      sendmail(email, name, subject);
      return res
        .json({
          success: true,
          message:
            "your request have successfully added to database.please wait i will get in touch soon",
        })
        .status(200);
    } catch (error) {
      return res.status(400).json({ error, message: "server error " });
    }
  } else {
    return res.json({
      success: false,
      message: validData.issues[0].message,
      statusCode: 400,
    });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
