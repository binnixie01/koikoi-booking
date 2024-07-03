import UserModel from "@/models/userModel";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password, provider } = await request.json();

  await dbConnect();
  const existingUser = await UserModel.findOne({
    $or: [
      { name },
      { email }]
  });
  if (existingUser) {
    return new NextResponse({message:"Email or Username is already in use"}, { status: 400 });
  }


  let hashedPassword;
  if (provider === 'credential' && password) {
    hashedPassword = await bcrypt.hash(password, 12);
  }


  try {
    await UserModel.create({ name, email, password: hashedPassword, provider });

    return new NextResponse("User is registered", { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(err, {
      status: 500,
    });
  }
};
