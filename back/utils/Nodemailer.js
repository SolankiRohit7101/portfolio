import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host:
    process.env.NODE_ENV === "development"
      ? "smtp.gmail.com"
      : "smtp-relay.sendinblue.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user:
      process.env.NODE_ENV === "development"
        ? process.env.NODE_MAILER_MAIL
        : process.env.PRDOUCTION_MAIL,
    pass:
      process.env.NODE_ENV === "development"
        ? process.env.NODE_MAILER_PASS
        : process.env.PRDOUCTION_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendmail = async (email, name, subject) => {
  const info = await transporter.sendMail({
    from: process.env.NODE_MAILER_MAIL, // sender address
    to: email, // list of receivers
    subject: "Auto Reply for your contacting me (Rohit solanki)", // Subject line
    html: `
    <h1 >Thank you ${name} for visting.</h1>
    <p >I have receive your request and i'll get in touch with you as soon as i get online.</p>`, // html body
  });
  console.log("Message sent:", info.messageId);
  console.log("mail send ");
};

sendmail().catch(console.error);

export default sendmail;
