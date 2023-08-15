import { Model, ModelCtor } from "sequelize";

export async function requestCreateQuestion({
  question,
  answer,
  answerIndex,
  model,
}: {
  question: string;
  answer: string[];
  answerIndex: number;
  model: ModelCtor<Model<any, any>> | undefined;
}) {
  try {
    let newQuestion =
      model &&
      (await model.create({
        question,
        answer,
        answerIndex,
      }));

    return newQuestion;
  } catch (error) {
    return { error, status: 500 };
  }
}
