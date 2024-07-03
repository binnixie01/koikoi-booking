"use client";

import React from "react";
import  { place} from "@/components/place";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const Page = () => {
return (<div className=" mx-auto px-8 bg-black md:pt-auto pt-10 ">
<HoverEffect items={place}></HoverEffect>
</div>)
};


export default Page;
