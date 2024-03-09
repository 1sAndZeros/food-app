import User from "@/models/User";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import bcrypt from "bcrypt";

// Create user
export const POST = async (req: any) => {
  try {
    const body = await req.json();
    const userData = body.formData;

    // Check data exists
    if (!userData?.name || !userData?.email || !userData?.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Make sure email is lowercase
    userData.email = userData.email.toLowerCase();

    // Check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    userData.image = `https://ui-avatars.com/api/?name=${userData.name}`;

    await User.create(userData);
    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
};
