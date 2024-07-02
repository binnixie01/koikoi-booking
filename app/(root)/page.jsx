import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Page = () => {
  const words = ["MANIPUR", "KANLEIPAK", "SANNA-LEIPAK"];
  return (
    <div className="flex flex-col md:flex-row bg-black items-center">
      <div className="items-center md:flex justify-center lg:w-2/5 w-2/3 md:mt-0 mt-16 ">
        <Image
          src={hero}
          alt="hero picture"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div className="md:h-[40rem] h-auto flex pt-8 md:pt-0">
        <div className="relative md:text-4xl text-2xl mx-auto top-1/4 md:left-12 pb-8 font-normal text-neutral-600 dark:text-neutral-400 md:w-full w-5/6">
          <div className="md:block flex flex-col">
            Your Gateway to<div><FlipWords words={words} />'S
            </div>
             <br />
            Wonders
          </div>

          <p className="text-sm md:text-xl pt-2">
            Seamless ticketing for an extraordinary <br />
            experience in Manipur`s iconic sites
          </p>
          <Button>
            <Link href="/explore">Explore</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
