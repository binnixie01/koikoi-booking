import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs"
export const authOptions= {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials){
        await dbConnect()   
        try {
          const user = await UserModel.findOne({
            email:credentials.email
          })
          if(!user){
            throw new Error('no user found with this email')
          }
          console.log(user)
          const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
          if(isPasswordCorrect){
            return user
          } else{
            throw new Error('invalid Password')
          }
        } catch (error) {
          console.log(error)
          throw new Error(error)
        }
        
      },
    }),
  ],
  session:{
    strategy:'jwt',
  },
  secret:process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          const res = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, provider: "google" }),
          });
          if (res.ok) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
    async jwt({ token, account, user,session }) {
      if (user) {
        return {...token,name:user.username,id:user.id}
      }
      
      return token
    },
    async session({ session, token, user }) {
      return session 
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
