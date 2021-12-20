import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { verifyPassword } from '../../../helpers/auth';
import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';

export default NextAuth({
  pages: {
    signIn: '/auth',
  },
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const db = await connectDB();

        // Lookup user
        const user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );
        if (!user) {
          db.disconnect();
          throw new Error('No user found!');
        }

        // Check if found users password matches hashed password in db for given email
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        console.log(isValid);

        if (!isValid) {
          db.disconnect();
          throw new Error('Invalid password. Could not log you in');
        }
        // Remove password field before sending user in jwt
        // const protectedUser = omit(user, 'password');

        db.disconnect();

        return { email: user.email };
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
