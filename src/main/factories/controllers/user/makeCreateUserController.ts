import CreateUserController from "../../../../presentation/controllers/user/CreateUserController";
import makeCreateUserUseCase from "../../useCases/user/makeCreateUserUseCase";
import makeFindUserByEmailUseCase from "../../useCases/user/makeFindUserByEmailUseCase";

export default function makeCreateUserController(): CreateUserController {
  return new CreateUserController(
    makeFindUserByEmailUseCase(),
    makeCreateUserUseCase()
  );
}
