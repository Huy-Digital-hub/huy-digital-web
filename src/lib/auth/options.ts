import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "E-Mail", type: "email" },
        passwort: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.passwort) {
          throw new Error("E-Mail und Passwort sind erforderlich");
        }

        const benutzer = await prisma.benutzer.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!benutzer) {
          throw new Error("Ungültige Anmeldedaten");
        }

        const passwortKorrekt = await bcrypt.compare(
          credentials.passwort,
          benutzer.passwortHash
        );

        if (!passwortKorrekt) {
          throw new Error("Ungültige Anmeldedaten");
        }

        if (!benutzer.emailVerifiziert) {
          throw new Error("EMAIL_NICHT_VERIFIZIERT");
        }

        return {
          id: benutzer.id,
          email: benutzer.email,
          name: benutzer.name,
          rolle: benutzer.rolle,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Tage
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rolle = (user as { rolle: string }).rolle;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.rolle = token.rolle as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
