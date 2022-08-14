import UserRepository from "../../../../infra/repositories/UserRepository";
import FindUserByEmailUseCase from "../../../../business/useCases/user/FindUserByEmailUseCase";

export default function makeFindUserByEmailUseCase(): FindUserByEmailUseCase {
  return new FindUserByEmailUseCase(new UserRepository());
}
