
"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import developer from "@/public/developer.jpg"
import Next from "@/components/svg/next";
import { IconBrandTailwind } from "@tabler/icons-react";
import Mongo from "@/components/svg/mongo";
import Link from "next/link";
const Page = () => {
  return (
    <div className="bg-black text-white/80 h-full md:pb-28 pb-20">
      <TracingBeam className="px-6 pt-16">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">

          <div className="mb-10">


            <p className={"text-xl mb-4"}>
              About
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              <div className="flex flex-col md:flex-row md:gap-44 gap-4 pb-6"> <Image
                src={developer}
                alt="binson picture"
                height="200"
                width="200"
                className="rounded-lg mb-10 object-cover md:w-40 w-24  "
              />
                <div className="flex flex-col  items-center ">
                  <div className="md:text-4xl text-2xl">Technologies Used</div>
                  <div className="flex gap-12 items-center">
                    <Link src={'https://nextjs.org'}><Next className='w-10 h-10 md:w-20 md:h-20' /></Link> 
                    <Link src={'https://mongodb.com'}><Mongo className="md:w-20 md:h-20 h-10 w-10"/></Link> 
                    <Link src={'https://tailwindcss.com'}><IconBrandTailwind className="md:w-20 md:h-20 h-10 w-10"/></Link>
                  </div>
                </div></div>

              <div className="leading-6">Hello! I'm <span className="text-black bg-white/80 rounded-lg px-1">  Thangjam Binson Singh </span>, a full-stack developer specializing in React.js and Next.js. I am a third year Computer Science Major student of DM College of Science, Dhanamanjuri University in Imphal, Manipur. I developed this website to facilitate ticketing for tourist places in Manipur, such as the historic Kangla Palace, Loktak Paat and many other places. My goal is to make it easier for everyone to explore and enjoy the beautiful attractions that Manipur has to offer.</div>

            </div>
          </div>

        </div>
      </TracingBeam></div>
  );
}



export default Page