import questionModel from "@/database/schema/questionModel";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    let questions = questionModel && (await questionModel.findAll());
    questions = questions?.sort(() => Math.random() - 0.5);
    return NextResponse.json({ status: 200, questions });
  } catch (err) {
    return NextResponse.json({ stop: 500, mesaage: "Internal Server Error" });
  }
}
