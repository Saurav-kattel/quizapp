import { NextResponse } from "next/server";
import { fetchUser } from "../_helpers/fetchUser";

export async function GET(request: Request) {
  let { email } = await request.json();
  const user = await fetchUser(email);

  return NextResponse.json({ user, status: 200, success: true });
}
