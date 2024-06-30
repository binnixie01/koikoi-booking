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
interface CardWrapperProps{
    children:React.ReactNode;
    headerLabel:string;
    backButtonlabel:string;
    backButtonHref:string;
}

const CardWrapper = ({children,headerLabel,backButtonHref,backButtonlabel}:CardWrapperProps) => {
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