import questionModel from "@/database/schema/questionModel";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    const questions = questionModel && (await questionModel.findAll());
    const url = new URL(request.url);

    let page = Number(url.searchParams.get("page")) ?? 0;
    const maxLength = questions?.length;
    if (maxLength && page > maxLength) {
      page = 0;
    }

    const paggedData = questions?.splice(page, 1);
    return NextResponse.json({ status: 200, paggedData });
  } catch (err) {
    return NextResponse.json({ stop: 500, mesaage: "Internal Server Error" });
  }
}
