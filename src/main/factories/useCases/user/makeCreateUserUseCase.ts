import CreateUserUseCase from "../../../../business/useCases/user/CreateUserUseCase";
import UserRepository from "../../../../infra/repositories/UserRepository";
import GenerateUuid from "../../../../infra/services/generateUuid";
import BcryptAdapter from "../../../../infra/criptography/bcryptAdapter";

export default function makeCreateUserUseCase(): CreateUserUseCase {
  const salt = 6;

  return new CreateUserUseCase(
    new UserRepository(),
    new GenerateUuid(),
    new BcryptAdapter(salt)
  );
}
