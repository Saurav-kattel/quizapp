import { NextResponse } from "next/server";
import { fetchUser } from "../helpers/fetchUser";
import { createNewAccount } from "./createNewAccount";
import { generateJwtToken } from "../helpers/generateJwtToken";
import { hashPassword } from "./hashPassword";
import { validate } from "./validate";

export async function POST(request: Request) {
  let body = await request.json();
  const errors = validate(body);
  if (errors.length > 0) return NextResponse.json({ errors, status: 400 });

  const isUser = await fetchUser(body.email);

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
