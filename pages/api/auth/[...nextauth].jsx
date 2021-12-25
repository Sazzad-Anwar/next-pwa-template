import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "johndoe@mail.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                }
            },
            authorize: (credentials) => {
                if (credentials.email === 'johndoe@mail.com' && credentials.password === 'test') {
                    return {
                        id: 2,
                        name: 'John',
                        email: 'johndoe@mail.com'
                    }
                }
                return null;
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }

            return token;
        },
        session: ({ session, token }) => {
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
    secret: "test",
    jwt: {
        secret: 'test',
        encryption: true,
    },
    // pages: {
    //     signIn: '/login'
    // }
})