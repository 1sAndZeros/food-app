import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import bcrypt from 'bcrypt';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

export const options: NextAuthOptions = {
  theme: {
    brandColor: '#c9ffe2',
    logo: '/image-bg.jpg',
    colorScheme: 'dark',
    buttonText: 'Sign in',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'name@example.com',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({
            email: credentials?.email,
          }).exec();

          if (foundUser && credentials?.password) {
            console.log('User exists');
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password,
            );

            if (match) {
              console.log('Password matches');
              delete foundUser.password;
              return foundUser;
            } else {
              console.log("Password doesn't match");
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
};
