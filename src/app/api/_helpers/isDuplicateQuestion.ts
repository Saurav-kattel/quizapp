import { Model, ModelCtor, Op } from "sequelize";

export async function isDupicateQuestion({
  questionstr,
  model,
}: {
  questionstr: string;
  model: ModelCtor<Model<any, any>> | undefined;
}) {
  model && (await model?.sync());

  const question = await model?.findOne({
    where: {
      question: {
        [Op.eq]: questionstr,
      },
    },
  });
  return question;
}
