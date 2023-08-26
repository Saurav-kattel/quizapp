import questionModel from "@/database/schema/questionModel";
import { fetchUser } from "../../_helpers/fetchUser";
import { verifyJwtToken } from "../../_helpers/verifyJwt";
import { requestCreateQuestion } from "../../_helpers/createQuestion";
import adminModel from "@/database/schema/adminModel";
import { NextResponse } from "next/server";
import { isDupicateQuestion } from "../../_helpers/isDuplicateQuestion";

export async function POST(request: Request) {
  const { question, answer, answerIndex, category } = await request.json();

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
    const dupicateQuestion = await isDupicateQuestion({
      questionstr: question,
      model: questionModel,
    });
    if (dupicateQuestion)
      return NextResponse.json({
        error: "question alredy exists",
        status: 401,
      });
    let createdQuestion = await requestCreateQuestion({
      question,
      answer: [...answer],
      answerIndex,
      model: questionModel,
      category: [...category],
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
