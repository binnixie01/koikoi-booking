"use client"
import { LoginSchema } from "@/schemas"
import CardWrapper from "./cardwrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/ui/login-error"
import { FormSuccess } from "@/components/ui/login-success"
// import { login } from "@/actions/login"
import { useState, useTransition } from 'react';
import { signIn } from "next-auth/react"

export const LoginForm = () => {
  const [error,setError]=useState("")
  const router = useRouter()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "123@abc.com",
      password:"password"
    },
  })
  const onSubmit= async(values:z.infer<typeof LoginSchema>,e:any)=>{
   
    // const router = useRouter();
    const {email,password}=values;
  
    try {
      const res = await signIn("credentials",{
        email,password,redirect:false
      })
      if(res?.error){
        // setError("Invalid credentils")
        return;
      }
      router.replace('/')
    } catch (error) {
      console.log(error);
      
    }
   
  }
  const [isPending, startTransition] = useTransition();

  return (
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonlabel="Don't have an account?"
    backButtonHref="/register" >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
       className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="123@gmail.com" type="email" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="enter password" {...field} type="password" disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError/>
        <FormSuccess />
        <Button className="w-full" type="submit" disabled={isPending}>Log In</Button>
      </form>
    </Form>
    </CardWrapper>
  )
}

