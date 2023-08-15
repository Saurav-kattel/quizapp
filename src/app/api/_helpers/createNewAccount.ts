import { Model, ModelCtor } from "sequelize";

export async function createNewAccount({
  username,
  email,
  password,
  userModel,
}: {
  username: string;
  email: string;
  password: string;
  userModel: ModelCtor<Model<any, any>> | undefined;
}) {
  userModel && (await userModel.sync());
  let user =
    userModel &&
    (await userModel.create({
      username: username,
      email: email,
      password: password,
    }));

  if (!user) return { message: "some error has occuerd" };
  return user;
}
