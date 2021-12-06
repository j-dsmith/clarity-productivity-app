import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../helpers/auth';
import connectDB from '../../../helpers/db';
import User from '../../../models/user';
import { omit } from 'lodash/omit';
export default NextAuth({
  session: {
    jwt: true,
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const db = await connectDB();

        // Lookup user
        const user = await User.findOne({ email: credentials.email });

        if(!user){
          db.disconnect()
          throw new Error('No user found!')
        }
        // Check if found users password matches hashed password in db for given email
        const isValid = await verifyPassword(credentials.password, user.password)

        if(!isValid){
          db.disconnect()
          throw new Error('Could not log you in');
        }
        // Remove password field before sending user in jwt
        const protectedUser = omit(user, 'password')

        
        db.disconnect()

        
        return {protectedUser}
      },
    }),
    // ...add more providers here
  ],
});

export default NextAuth()