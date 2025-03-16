import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { fullName, phoneNumber, address, size } = req.body;

  // Configure the SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Replace with your Gmail address
      pass: "your-app-password", // Replace with your generated App Password
    },
  });

  // Email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "your-email@gmail.com", // Replace with the email where you want to receive messages
    subject: "New Billing Details Submission",
    text: `Billing Details:
    - Full Name: ${fullName}
    - Phone Number: ${phoneNumber}
    - Address: ${address}
    - Size: ${size}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ message: "Email sending failed", error });
  }
}
