import bcrypt from "bcryptjs";
import { fetchUser } from "./fetchUser";
import userModel from "@/database/schema/userModel";
import adminModel from "@/database/schema/adminModel";
export async function checkPassword({
  password,
  email,
}: {
  password: string;
  email: string;
}) {
  let admin: any = await fetchUser({ email, userModel: adminModel });
  if (!admin) {
    let user: any = await fetchUser({ email, userModel });
    if (!user) return { error: "no user found", isCorrect: false };
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) return { isCorrect, error: "wrong password" };
    return { isCorrect, user: user.userId };
  } else {
    const isCorrect = await bcrypt.compare(password, admin.password);
    if (!isCorrect) return { isCorrect, error: "wrong password" };
    return { isCorrect, user: admin.userId, isAdmin: true };
  }
}
