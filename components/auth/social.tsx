"use client"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
// import { signIn } from "@/auth"


export const Social = ()=>{
    
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button variant="outline" size="lg" className="w-full" onClick={()=>signIn("google")}><FcGoogle className="h-5 w-5"/></Button> 
            
        </div>
        
    )
}