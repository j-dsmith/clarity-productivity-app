import { getProtectedUser } from '../../../helpers/db';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const session = await getSession({ req });
    const { email } = session.user;

    try {
      const user = await getProtectedUser(email);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default handler;
