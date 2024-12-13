import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (credentials?.password === process.env.ADMIN_PASSWORD) {
                    return {id: "1", name: "admin"}
                }
                return null;
            }
        })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
