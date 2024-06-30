"use client";
import { cn } from "@/lib/utils";
import React from "react";
import  { place,Monument } from "@/components/place";
import { HoverEffect } from "@/components/ui/card-hover-effect";


const Page = () => {
return (<div className=" mx-auto px-8 bg-black">
<HoverEffect items={place}></HoverEffect>
</div>)
};


export default Page;
