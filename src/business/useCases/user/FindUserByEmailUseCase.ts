import { IUseCase } from "../IUseCase";
import { left, right } from "../../../shared/Either";
import {
  InputFindUserByEmailUseCase,
  OutputFindUserByEmailUseCase,
} from "../../dto/useCases/user/findByEmail";
import notFound from "../../../domain/errors/notFound";
import IFindUserBy from "../../protocols/db/repositories/user/IFindUserBy";

export default class FindUserByEmailUseCase
  implements
    IUseCase<InputFindUserByEmailUseCase, OutputFindUserByEmailUseCase>
{
  constructor(private userRepository: IFindUserBy) {}

  async execute(
    props: InputFindUserByEmailUseCase
  ): Promise<OutputFindUserByEmailUseCase> {
    const user = await this.userRepository.findBy({ email: props.email });

    if (!user) {
      return left(notFound());
    }

    return right(user);
  }
}
