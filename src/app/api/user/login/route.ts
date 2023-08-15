import { NextResponse } from "next/server";
import { generateJwtToken } from "../../_helpers/generateJwtToken";
import { checkPassword } from "../../_helpers/checkPassword";
import { validateCredantials } from "./validate";

export async function POST(request: Request) {
  let body = await request.json();
  let errors = await validateCredantials({
    email: body.email,
    password: body.password,
  });
  if (errors.length > 0)
    return NextResponse.json({
      errors,
      status: 400,
    });

  let result = await checkPassword({
    email: body.email,
    password: body.password,
  });
  if (!result.isCorrect)
    return NextResponse.json({ error: result.error, status: 401 });

  let token = await generateJwtToken({ email: body.email, id: result.user });
  if (token.hasOwnProperty("errors"))
    return NextResponse.json({
      message: token,
    });

  return NextResponse.json({
    token,
    success: true,
    status: 200,
    admin: result.isAdmin ? result.isAdmin : false,
  });
}
