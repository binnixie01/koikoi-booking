"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import BackButton from "@/components/auth/backbutton";

const CardWrapper = ({children,headerLabel,backButtonHref,backButtonlabel}) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader><Header label={headerLabel}/></CardHeader>
       <CardContent>{children}</CardContent>  
      <CardFooter><Social/></CardFooter>
       <CardFooter><BackButton href={backButtonHref} label={backButtonlabel}/></CardFooter>
    </Card>
  )
}

export default CardWrapper