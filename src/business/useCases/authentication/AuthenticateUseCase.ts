import { IUseCase } from "../IUseCase";
import {
  InputAuthentication,
  OutputAuthentication,
} from "../../dto/useCases/authentication/auth";
import IFindUserBy from "../../protocols/db/repositories/user/IFindUserBy";
import { IHashCompare } from "../../protocols/criptography/IHashCompare";
import { IGenerateToken } from "../../protocols/criptography/IGenerateToken";
import { left, right } from "../../../shared/Either";
import notFound from "../../../domain/errors/notFound";
import wrongPassword from "../../../domain/errors/wrongPassword";

export default class AuthenticateUseCase
  implements IUseCase<InputAuthentication, OutputAuthentication>
{
  constructor(
    private readonly userRepository: IFindUserBy,
    private readonly hashCompare: IHashCompare,
    private readonly generateToken: IGenerateToken
  ) {}

  async execute(props: InputAuthentication): Promise<OutputAuthentication> {
    const account = await this.userRepository.findBy({ email: props.email });

    if (!account) {
      return left(notFound());
    }

    const isValid = await this.hashCompare.compare(
      props.password,
      account.export().password
    );

    if (!isValid) {
      return left(wrongPassword());
    }

    const accessToken = await this.generateToken.generate(
      account.export().id as string
    );

    return right(accessToken);
  }
}
