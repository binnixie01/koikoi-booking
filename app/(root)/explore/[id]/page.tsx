"use client";
import React, { useEffect, useState } from "react";
import { place } from "@/components/place";
import { Button } from "@/components/ui/button";
import { ExploreCard } from "@/components/ui/explorecard";
import { StaticImageData } from "next/image";
import TicketForm from "@/components/ticketform";

const Page = ({ params }: { params: { id: string } }) => {
  interface foundPlaceObj {
    id: string;
    title: string;
    photoUrl: StaticImageData;
    address: string;
    description: string;
    link: string;
  }
  const [placeobject, setPlaceobject] = useState<foundPlaceObj>();
  useEffect(() => {
    const foundPlace = place.find((item) => item.id === params.id);
    setPlaceobject(foundPlace);
  }, [params.id]);
const [ticket,setTicket]=useState(false)
  return (
    <div className="flex flex-col bg-black/90 pt-10">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:ml-8 lg:gap-20">
        <ExploreCard card={placeobject?.id} />
        <div className="flex flex-col w-full lg:w-1/2 text-white/80 gap-4 mt-6 lg:mt-0 items-center lg:items-start ">
          <div className="text-4xl">{placeobject?.title}</div>
          <div>{placeobject?.address}</div>
          <div>
            <Button onClick={()=>{setTicket(true)}}>Book Ticket</Button>
          </div>
        </div>
      </div>
      <div className="text-white/80 w-3/4 m-auto text-justify pt-6">
        {placeobject?.description}
      </div>
      {ticket&&<TicketForm onClick={setTicket}/>}
    </div>
  );
};

export default Page;
