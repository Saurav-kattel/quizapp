import { DataTypes, UUID } from "sequelize";
import db from "../dbConnect";

const gameModel = await db();
const model =
  gameModel &&
  gameModel.define("games", {
    gameId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    playerId: {
      type: UUID,
      allowNull: false,
    },
    questions: {
      type: DataTypes.ARRAY(DataTypes.ABSTRACT),
    },
  });

export default model;
