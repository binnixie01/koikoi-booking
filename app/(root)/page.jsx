import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({ subsets: ["latin"], weight: ["600"] })
const Page = () => {
  const words = ["MANIPUR", "KANGLEIPAK", "SANNA-LEIPAK"];
  return (
    <div className="flex flex-col md:flex-row bg-black items-center pb-8">
      <div itemscope itemtype="https://schema.org/WebSite">
        <meta itemprop="url" content="https://koikoi.vercel.app/" />
        <meta itemprop="name" content="Koikoi" />
      </div>

      <div className="items-center md:flex justify-center lg:w-2/5 w-2/3 md:mt-0 mt-16 ">
        <Image
          src={hero}
          alt="hero picture"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div className="md:h-[40rem] h-auto flex pt-2 md:pt-0">
        <div className="relative md:text-4xl text-2xl mx-auto md:top-[10rem] md:left-12 pb-8 font-normal text-white/60 dark:text-neutral-400 md:w-full w-[85%]">
          <h1 className={cn("text-6xl pb-2 font-semibold", font.variable)}>KoiKoi</h1>
          <div className="md:block flex flex-col">
            Your Gateway to<div><FlipWords words={words} className={"text-black/90 font-semibold bg-white/70 rounded-xl px-2"} />'S
            </div>
            Wonders
          </div>

          <p className="text-sm md:text-xl pt-2">
            Seamless ticketing for an extraordinary <br />
            experience in Manipur`s iconic sites
          </p>
          <Button variant = 'secondary'>
            <Link href="/explore">Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
