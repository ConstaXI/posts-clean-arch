import { AuthMiddleware } from "../../../../presentation/middlewares/AuthMiddleware";
import JwtAdapter from "../../../../infra/criptography/jwtAdapter";
import env from "../../../config/env";

export default function makeAuthMiddleware() {
  return new AuthMiddleware(new JwtAdapter(env.jwtSecret));
}
