"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import logo from "@/public/logo1.svg";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Header = () => {
  const { status, data } = useSession();

  return (
    <header className="flex w-full h-12 bg-neutral-800/30 pt-4 pr-4 pl-2 pb-4 fixed z-50 backdrop-blur-lg  ">
      <div className="flex wrapper w-full items-center justify-between  text-white/80">
        <div className="flex justify-between items-center gap-8">
        <Link href="/" className="w-32 h-10 bg-white rounded-3xl flex">
          <div className="flex items-center gap-1">
            <Image
              src={logo}
              alt="logo image"
              width={60}
              className="rounded-3xl"
            />
            <div className="relative text-black">KoiKoi</div>
          </div>
        </Link>
        <Link className=" hover:text-white" href={"/explore"}>Explore</Link>
        {status==="authenticated"?(<Link className=" hover:text-white" href={"/orders"}>Orders</Link>):<></>}
        </div>
        <div className="flex w-72 justify-end gap-4 shadow-xl items-center">
          {status === "authenticated" ? (
            <>
              <div>{data?.user?.email}</div>
              <Button
                onClick={() => {
                  signOut();
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
      </div>
    </header>
  );
};

export default Header;
