"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
    if (status!="authenticated") { router.replace('/') } else {
      fetchTickets().then((ticket) => {
        setTickets(ticket)
      })
    }
  }
    , [])

  return (<div className='pt-20 bg-black text-white/80 flex justify-center h-screen'>
    <Table >
      <TableCaption>A list of your recent ticket invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="md:w-auto">Invoice</TableHead>
          <TableHead>Place</TableHead>
          <TableHead>No. of Tickets</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tickets.map((ticket) => {
          return (
            <TableRow key={ticket._id}>
              <TableCell className="font-medium md:w-auto w-10">{ticket._id}</TableCell>
              <TableCell>{ticket.place}</TableCell>
              <TableCell>{ticket.qty}</TableCell>
              <TableCell className="text-right">{ticket.qty * 50}</TableCell>
            </TableRow>)
        })}
      </TableBody>
    </Table></div>
  );
};
export default Page