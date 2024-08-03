import TicketModel from "@/models/ticketModel";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNTSID
const authToken = process.env.TWILIOAUTHTOKEN
const client = twilio(accountSid, authToken);
export const POST = async (request) => {
  const { name, place, amount,number } = await request.json();
  await dbConnect();
  try {
    await TicketModel.create({
      email: name, place, qty: amount
    });
    client.messages
          .create({
            body: `Hey ${name} your ticket is booked for ${place}`,
            from: '+17862458469',
            to: '+916009786052'
          })
          .then(message => console.log(message.sid));
    return new NextResponse("Ticket added", { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const GET = async (request) => {
  await dbConnect()
  try {
    const tickets = await TicketModel.find({email:session.user.email})
    return NextResponse.json(tickets)
  } catch (error) {
     return NextResponse.json(error)
  }
}