import userModel from "@/database/schema/userModel";

export async function createNewAccount({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
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
