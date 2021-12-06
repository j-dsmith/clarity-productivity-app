import { hashPassword } from '../../../helpers/auth.js';
import connectDB from '../../../helpers/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not supported' });
    return;
  }

  // destructure request body
  const { name, email, password } = req.body;
  // Validate email and password
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long',
    });
    return;
  }

  // Open mongoose connection
  const db = await connectDB();

  // Check if user with email exists in database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(422).json({
      message: 'A user with that email address already exists in the database',
    });
    db.disconnect();
    return;
  }

  // Hash password
  const hashedPassword = await hashPassword(password);
  // Create new user and save in db
  const user = await new User({
    name,
    email,
    password: hashedPassword,
  }).save();
  db.disconnect();
  res.status(200).json({ message: 'User created' });
};
export default handler;
