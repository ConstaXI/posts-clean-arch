import { config } from "dotenv";

config();

export default {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET ?? "secret",
};
