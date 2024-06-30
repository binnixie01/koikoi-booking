import TicketModel from "@/models/ticketModel";
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email,place,qty} = await request.json();

  await dbConnect();

  try {
    await TicketModel.create({
      email,place,qty
      
    });

    return new NextResponse("Ticket added", { status: 200 });
  } catch (err: any) {
    console.log(err);

    return new NextResponse(err, {
      status: 500,
    });
  }
};
