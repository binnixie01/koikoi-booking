"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo1.svg";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const font = Poppins({ subsets: ["latin"], weight: ["600"] })
const Header = () => {
  const { status, data } = useSession();
  const pathname = usePathname()

  return (
    <header className="flex w-full h-12 bg-neutral-800/30 pt-4 pr-4 pl-2 pb-4 fixed z-50 backdrop-blur-lg items-center">
      <nav className="md:hidden flex items-center font-bold tracking-wider">
        <DropdownMenu >
          <DropdownMenuTrigger asChild><Button variant="outline">Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href={"/"}>Home</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href={"/explore"}>Explore</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href={"/about"}>About</Link></DropdownMenuItem>
            {status === "authenticated" ? (<DropdownMenuItem className="" asChild><Link href={"/orders"}>Orders</Link></DropdownMenuItem>) : null}
            {status === "authenticated" ? (<DropdownMenuItem className="" onClick={() => {
              signOut({ callbackUrl: '/' });
              toast("Signed Out")
            }}>Sign-Out</DropdownMenuItem>) : <DropdownMenuItem asChild className=""><Link href={"/register"}>Sign-In</Link></DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className={cn("absolute right-[43%]  text-white/90  font-semibold", font.className)}>KoiKoi</div>
      </nav>
      {status === "authenticated" && <div className="absolute md:hidden block right-4"><Avatar>
        <AvatarImage src="" />
        <AvatarFallback>{data?.user?.email.charAt(0)}</AvatarFallback>
      </Avatar>
      </div>}

      <nav className="md:flex wrapper w-full items-center justify-between  hidden text-white/80">
        <div className="flex justify-between items-center gap-8">
          <Link href="/" className="w-32">
            <div className="flex items-center gap-2  ">
              <Image
                src={logo}
                alt="logo image"
                width={60}
                className="rounded-full"
              />
              <div className="relative text-white/80">KoiKoi</div>
            </div>
          </Link>
          <Link className={` ${pathname === '/explore' ? 'text-black/90 bg-white/80 rounded-lg px-1' : ''} hover:text-white`} href={"/explore"}>Explore</Link>
          <Link className={` hover:text-white ${pathname === '/about' ? 'text-black/90 bg-white/80 rounded-lg px-1' : ''}`} href={"/about"}>About</Link>
          {status === "authenticated" ? (<Link className={`${pathname === '/orders' ? 'text-black/90 bg-white/80 rounded-lg px-1' : ''}hover:text-white`} href={"/orders"}>Orders</Link>) : <></>}
        </div>
        <div className="flex w-72 justify-end gap-4 shadow-xl items-center">
          {status === "authenticated" ? (
            <>
              <div>{data?.user?.email}</div>
              <Button variant='secondary'
                onClick={() => {
                  signOut({ callbackUrl: '/' });
                  toast("Signed Out")
                }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link href={"/register"}>Sign in</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
