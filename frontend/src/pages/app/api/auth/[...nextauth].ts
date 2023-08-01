// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "GOOGLE_CLIENT_ID", // Replace with your Google OAuth client ID
      clientSecret: "GOOGLE_CLIENT_SECRET", // Replace with your Google OAuth client secret
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
