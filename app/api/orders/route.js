import TicketModel from "@/models/ticketModel";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (request) => {
  const { name, place, amount } = await request.json();

  await dbConnect();

  try {
    await TicketModel.create({
      email: name, place, qty: amount

    });

    return new NextResponse("Ticket added", { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request) => {
  const session= await getServerSession(authOptions)
  
  await dbConnect()
  try {
    // if(data){
      // emailData = data.user.email
    const tickets = await TicketModel.find({email:session.user.email})
    return NextResponse.json(tickets)
  } catch (error) {
     return NextResponse.json(error)
  }
 

}