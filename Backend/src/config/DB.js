import { DataSource } from "typeorm";
import { User } from "../entities/user.entity.js";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DATABASE } from "./env.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: `${DB_HOST}`,
    port: `${DB_PORT}`,
    username: `${DB_USERNAME}`,
    password: `${DB_PASSWORD}`,
    database: `${DATABASE}`,
    synchronize: true,
    logging: false,
    entities: [User],
});

export async function connectDB() {
  try {
    await AppDataSource.initialize();
    console.log("=> Conexión exitosa a la base de datos PostgreSQL!");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);
  }
}
