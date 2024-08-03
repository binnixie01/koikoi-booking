"use client";
import React, { useEffect, useState, Suspense } from "react";
import { place } from "@/components/place";
import { Button } from "@/components/ui/button";
import { ExploreCard } from "@/components/ui/explorecard";
import TicketForm from "@/components/ticketform";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const Page = ({ params }) => {
  const { status } = useSession()
  const [placeobject, setPlaceobject] = useState();
  const [ticket, setTicket] = useState(false)

  useEffect(() => {
    const foundPlace = place.find((item) => item.id === params.id);
    setPlaceobject(foundPlace);
  }, [params.id]);

  return (
    <div className="flex flex-col bg-black pt-16 pb-5 md:h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:ml-8 lg:gap-20">
        <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl " />}>
          <ExploreCard card={placeobject?.id} />
        </Suspense>
        <div className="flex flex-col w-full lg:w-1/2 text-white/80 gap-4 mt-6 lg:mt-0 items-center lg:items-start ">
          <h1 className="text-4xl text-center">{placeobject?.title}</h1>
          <div className="w-3/5 md:text-base text-sm">{placeobject?.address}</div>
          <div className="w-3/4">
            {status === "authenticated" ? (<Button className="w-full" onClick={() => { setTicket(true) }}>Book Ticket</Button>) : (<Button asChild><Link href={'/login'}>Login</Link></Button>)}
          </div>
        </div>
      </div>
      <div className="text-white/80 w-3/4 m-auto text-justify pt-6">
        {placeobject?.description}
      </div>
      {ticket && <TicketForm onClick={setTicket} place={placeobject?.title} />}
    </div>
  );
};

export default Page;
