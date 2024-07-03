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
import { useState, useTransition } from 'react';
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { ButtonLoading } from "../ui/buttonloading"
import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"

export const LoginForm = () => {
  const [error,setError]=useState("")
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  })
  const [isPending, startTransition] = useTransition();
  const onSubmit= async(values)=>{
   
    
    const {email,password}=values;
    startTransition(async () => {
    try {
      const res = await signIn("credentials",{
        email,password,redirect:false
      })
      if(res?.error){
        toast(
          <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
           <ExclamationTriangleIcon className="h-4 w-4"/>
           <p>{res.error}</p>
          </div> 
       )
        return;
      }
      if(res.ok){
  
        toast((
          <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 ">
           <CheckCircledIcon className="h-4 w-4"/>
           <p>Log In Success</p>
          </div> 
       ))
        router.replace('/')
      }
      
      
    } catch (error) {
      setError(error)
      
    }})
   
  }

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
                <Input placeholder="Enter Email..Hurry" type="email" {...field} disabled={isPending} />
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
        {isPending?(<ButtonLoading/>):(<Button className="w-full" type="submit" disabled={isPending}>Log In</Button>)}
        
      </form>
    </Form>
    </CardWrapper>
  )
}

