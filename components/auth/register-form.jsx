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

import { useState, useTransition } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ButtonLoading } from "../ui/buttonloading"
import { toast } from "sonner"

export const RegisterForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name:"Binson",
    },
  })
 
  const onSubmit=async (values)=>{
    startTransition(async () => {
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
        toast("Email or Username is already taken")
      }
      if (res.status === 200) {
        setError("");
        toast("You are registered")

        router.replace("/login");
      }
    } catch (err) {
      setError(err)
      
    }})
  };
  



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
                <Input {...field} disabled={isPending} placeholder="Enter Username" />
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
                <Input placeholder="Enter Email" type="email" {...field} disabled={isPending} />
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
                <Input placeholder="Enter password" {...field} type="password" disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isPending?(<ButtonLoading/>):(<Button className="w-full" type="submit" disabled={isPending}>Create an account</Button>)}
        
      </form>
    </Form>
    </CardWrapper>
  )
}

