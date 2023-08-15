import { Sequelize } from "sequelize";
import pg from "pg";
const connect = async () => {
  const db = new Sequelize({
    database: "quiz",
    username: "u0_a102",
    password: "mypasss",
    dialect: "postgres",
    port: 5432,
    host: "localhost",
    logging: false,
    dialectModule: pg,
  });
  try {
    await db.validate();
    return db;
  } catch (err: any) {
    console.log(err);
  }
};
export default connect;
