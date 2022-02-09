import connectDB from "../../../helpers/db";
import { User } from "../../../models/user";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      const session = await getSession({ req });
      const { email } = session.user;

      try {
        const db = await connectDB();
        const user = await User.findOne({ email });
        db.disconnect();
        res.status(200).json({ data: user });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;
    case "DELETE":
      try {
        const db = await connectDB();
        const response = await User.deleteOne({ email });
        res.status(200).json({ message: "User successfully deleted" });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;
  }
};

export default handler;
