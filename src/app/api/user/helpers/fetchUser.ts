import userModel from "@/database/schema/userModel";
import { Op } from "sequelize";

export async function fetchUser(email: string) {
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
