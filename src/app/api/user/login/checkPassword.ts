import bcrypt from "bcryptjs";
import { fetchUser } from "../helpers/fetchUser";
export async function checkPassword({
  password,
  email,
}: {
  password: string;
  email: string;
}) {
  let user: any = await fetchUser(email);
  if (!user) return { error: "no user found", isCorrect: false };
  const isCorrect = await bcrypt.compare(password, user.password);
  if (!isCorrect) return { isCorrect, error: "wrong password" };
  return { isCorrect, user: user.userId };
}
