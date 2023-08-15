import { NextResponse } from "next/server";
import { fetchUser } from "../../_helpers/fetchUser";
import { createNewAccount } from "../../_helpers/createNewAccount";
import { generateJwtToken } from "../../_helpers/generateJwtToken";
import { hashPassword } from "../../_helpers/hashPassword";
import { validate } from "../../_helpers/validate";
import userModel from "@/database/schema/adminModel";
export async function POST(request: Request) {
  let body = await request.json();
  const errors = validate(body);
  if (errors.length > 0) return NextResponse.json({ errors, status: 400 });

  const isUser = await fetchUser({ email: body.email, userModel });

  if (isUser)
    return NextResponse.json({
      message: "user alredy exists",
      status: 401,
      success: false,
    });

  //checking for duplicate users

  let hash = await hashPassword(body.password);
  //hashing password

  if (hash.error)
    return NextResponse.json({
      status: 500,
      message: "error while generating hash",
    });

  const response: any = await createNewAccount({
    username: body.username,
    email: body.email,
    password: hash.hash ? hash.hash : "",
    userModel,
  }); //creating new accountForUser

  if (response.hasOwnProperty("message"))
    return NextResponse.json({ response, status: 400 });

  const token = await generateJwtToken({
    id: response.userId,
    email: response.email,
  });

  if (token.hasOwnProperty("errors"))
    return NextResponse.json({
      message: token,
    });

  return NextResponse.json({ token, success: true, status: 200 });
}
