import questionModel from "@/database/schema/questionModel";
import { fetchUser } from "../../_helpers/fetchUser";
import { verifyJwtToken } from "../../_helpers/verifyJwt";
import { requestCreateQuestion } from "../../_helpers/createQuestion";
import adminModel from "@/database/schema/adminModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { question, answer, answerIndex } = await request.json();

  const details: { id: string; email: string } = await verifyJwtToken(request);

  if (details.hasOwnProperty("error")) return details;
  const isAdmin = await fetchUser({
    email: details.email,
    userModel: adminModel,
  });
  if (!isAdmin)
    return NextResponse.json({
      error: "only admins can add question",
      status: 401,
    });
  try {
    let createdQuestion = await requestCreateQuestion({
      question,
      answer,
      answerIndex,
      model: questionModel,
    });

    return NextResponse.json({
      question: createdQuestion,
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "interal server error",
      error,
    });
  }
}
