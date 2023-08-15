import { Op, ModelCtor, Model } from "sequelize";

export async function fetchUser({
  email,
  userModel,
}: {
  email: string;
  userModel: ModelCtor<Model<any, any>> | undefined;
}) {
  userModel && (await userModel.sync());
  let user =
    userModel &&
    (await userModel.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    }));

  return user;
}
