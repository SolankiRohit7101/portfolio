import { object, string, email, minLength, maxLength, endsWith } from "valibot";

const contactData = object({
  email: string("email is required.", [
    email(),
    endsWith("@gmail.com", "Please enter valid gmail."),
  ]),
  message: string("message is required.", [
    minLength(50, "Please discribe message in detail . (50 character min)"),
  ]),
  name: string("name is required.", [
    minLength(4, "Name must be of  4 Character or more"),
  ]),
  subject: string("subject is required.", [
    minLength(8, "subject is required"),
    maxLength(50, " no more than 50 Character subject"),
  ]),
});

export default contactData;
