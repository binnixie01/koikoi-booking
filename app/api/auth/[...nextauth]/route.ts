import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs"
import { User,Account,Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { SessionStrategy } from "next-auth";
export const authOptions:AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any):Promise<any> {
        await dbConnect()   
        try {
          const user = await UserModel.findOne({
            $or:[
              {email:credentials.identifier},
              {name:credentials.identifier}
            ]
          })
          if(!user){
            throw new Error('no user found with this email')
          }
          const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
          if(isPasswordCorrect){
            return user
          } else{
            throw new Error('invalid Password')
          }
        } catch (error:any) {
          throw new Error(error)
        }
        
      },
    }),
  ],
  session:{
    strategy:'jwt' as SessionStrategy,
  },
  secret:process.env.NEXTAUTH_SECRET,
  
  callbacks: {
    async signIn({ user, account }:{user:User,account:Account}) {
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
    async jwt({ token, account, user,session }:{token:JWT,account:Account,user:User,session:Session}) {
      // if (account) {
      // }
      console.log({token,account,user,session});
      
      return token
    },
    async session({ session, token, user }:{session:Session,token:JWT,user:User}) {
      console.log({session,token,user});
      
      return session 
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
