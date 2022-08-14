import AuthenticateUseCase from "../../../../business/useCases/authentication/AuthenticateUseCase";
import UserRepository from "../../../../infra/repositories/UserRepository";
import BcryptAdapter from "../../../../infra/criptography/bcryptAdapter";
import JwtAdapter from "../../../../infra/criptography/jwtAdapter";
import env from "../../../config/env";

export default function makeAuthenticateUseCase() {
  const salt = 6;

  return new AuthenticateUseCase(
    new UserRepository(),
    new BcryptAdapter(salt),
    new JwtAdapter(env.jwtSecret)
  );
}
