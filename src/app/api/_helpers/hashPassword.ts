import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    return { hash };
  } catch (err) {
    return { error: err };
  }
}
