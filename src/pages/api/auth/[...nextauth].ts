import NextAuth, { NextAuthOptions, User } from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

export default NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
    newUser: "/register",
  },
  providers: [
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID!,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET!,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      async profile(profile) {
        const result = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}/login_oauth`,
          {
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            google_id: profile.sub,
          }
        )
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          token: result.data.data.token,
        }
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL_API}/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        )
        const user = await res.json()

        if (res.ok && user) {
          return user.data
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async session({ session, user, token }: any) {
      if (token) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.user = token.user
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      if (user) {
        const { access_token, refresh_token, ...profile } = user
        token.accessToken = user.access_token
        token.refreshToken = user.refresh_token
        token.user = profile
      }

      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})
