import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      // !!auth?.user is as same as if (auth?.user) return true else return false
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
});
