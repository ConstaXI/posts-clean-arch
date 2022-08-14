import { IUseCase } from "../IUseCase";
import { UserEntity } from "../../../domain/entities/User";
import { right } from "../../../shared/Either";
import { IGenerateUuid } from "../../protocols/services/IGenerateUuid";
import {
  InputCreateUserUseCase,
  OutputCreateUserUseCase,
} from "../../dto/useCases/user/create";
import ISaveUser from "../../protocols/db/repositories/user/ISaveUser";
import { IHasher } from "../../protocols/criptography/IHasher";

export default class CreateUserUseCase
  implements IUseCase<InputCreateUserUseCase, OutputCreateUserUseCase>
{
  constructor(
    private readonly userRepository: ISaveUser,
    private readonly generateUuid: IGenerateUuid,
    private readonly hashPassword: IHasher
  ) {}

  async execute(
    props: InputCreateUserUseCase
  ): Promise<OutputCreateUserUseCase> {
    const hashPassword = await this.hashPassword.hash(props.password);

    const user = UserEntity.create({
      ...props,
      password: hashPassword,
    });

    await this.userRepository.save({
      ...user.value.export(),
      id: this.generateUuid.generate(),
    });

    return right(user.value);
  }
}
