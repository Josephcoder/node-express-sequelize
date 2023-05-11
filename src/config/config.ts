import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
const connection = new Sequelize({
  port: 8889,
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "todos",
  logging: false,
  models: [Todos],
});

export default connection;
