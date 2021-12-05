import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email, password are provided
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        const user = new User({
          name,
          email,
          password,
        });

        const newUser = await user.save();
        return res.status(200).send(newUser);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
