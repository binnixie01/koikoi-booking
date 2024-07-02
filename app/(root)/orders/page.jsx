"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { data, status } = useSession()
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const fetchTickets = async () => {
    const res = await fetch('/api/orders', { method: 'GET' })
    const tickets = await res.json()
    return tickets
  }
  useEffect(() => {
    if (!data) { router.replace('/') } else {
      fetchTickets().then((ticket) => {
        setTickets(ticket)
      })
    }
  }
    , [])

  return (
    <div className='flex flex-col  bg-black/90 pt-16 text-white/80 items-center h-screen text-sm md:text-base'>
      <div className="flex flex-col md:flex-row gap-4 w-3/4 pb-4">
        <div className='w-1/4'>Ticket ID</div> <div className='w-1/4'>Email</div><div className='w-1/4'>Place</div><div className='w-1/4'>No. of Tickets</div>
      </div>
      {tickets.map((ticket) => {
        return <div className="flex flex-col md:flex-row gap-4 w-3/4 " key={ticket._id}><div className='w-1/4'>{ticket._id}</div> <div className='w-1/4'>{ticket.email}</div><div className='w-1/4'>{ticket.place}</div><div className='w-1/4'>{ticket.qty}</div></div>
      })}</div>
  );
};
export default Page