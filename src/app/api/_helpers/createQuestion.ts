import { Model, ModelCtor } from "sequelize";

export async function requestCreateQuestion({
  question,
  answer,
  answerIndex,
  model,
  category,
}: {
  question: string;
  answer: string[];
  category: string[];
  answerIndex: number;
  model: ModelCtor<Model<any, any>> | undefined;
}) {
  try {
    model && (await model.sync());
    let newQuestion =
      model &&
      (await model.create({
        question,
        options: answer,
        answerIndex,
        category,
      }));

    return newQuestion;
  } catch (error) {
    return { error, status: 500 };
  }
}
