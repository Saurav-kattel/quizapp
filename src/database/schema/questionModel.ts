import { DataTypes } from "sequelize";
import db from "../dbConnect";

const questionModel = await db();

let model =
  questionModel &&
  questionModel.define("question", {
    questionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    answerIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default model;
