import { DataTypes } from "sequelize";
import db from "../dbConnect";

const userModel = await db();

let model =
  userModel &&
  userModel.define("user", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,

      allowNull: false,
    },
  });

export default model;
