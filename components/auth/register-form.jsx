"use client"
import { RegisterSchema } from "@/schemas"
import CardWrapper from "./cardwrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { useState, useTransition } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export const RegisterForm = () => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name:"Ngouba",
      email: "123@abc.com",
      password:"password"
    },
  })
  const [error, setError] = useState("");
 
  const onSubmit=async (values)=>{
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...values,provider:"credential"}
      )
    })
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.replace("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  
  const [isPending, startTransition] = useTransition();



  return (
    <CardWrapper
    headerLabel="Create an account"
    backButtonlabel="Already have an account?"
    backButtonHref="/login">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
       className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="enter password" {...field} type="password" disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError/>
        <FormSuccess />
        <Button className="w-full" type="submit" disabled={isPending}>Create an account</Button>
      </form>
    </Form>
    </CardWrapper>
  )
}

