import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({subsets:["latin"],weight:["600"]})

export const Header = ({label})=>{
    return (
        <div className=" w-full flex flex-col gap-y-4 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold",font.className)}>KoiKoi</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}