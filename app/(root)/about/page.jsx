
"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import developer from "@/public/developer.jpg"
const Page = () => {
  return (
    <div className="bg-black text-white/80 h-full">
      <TracingBeam className="px-6 pt-16">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">

          <div className="mb-10">
            

            <p className={"text-xl mb-4"}>
              About
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">

                <Image
                  src={developer}
                  alt="binson picture"
                  height="200"
                  width="200"
                  className="rounded-lg mb-10 object-cover md:w-40 w-24  "
                />
              <div>Hello! I'm Thangjam Binson Singh, a full-stack developer specializing in React.js and Next.js. I graduated from DM College of Science, Dhanamanjuri University in Imphal, Manipur. I developed this website to facilitate ticketing for tourist places in Manipur, such as the historic Kangla. My goal is to make it easier for everyone to explore and enjoy the beautiful attractions that Manipur has to offer.</div>
              
            </div>
          </div>

        </div>
      </TracingBeam></div>
  );
}



export default Page