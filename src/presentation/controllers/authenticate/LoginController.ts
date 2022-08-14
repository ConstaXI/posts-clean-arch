import AbstractController from "../AbstractController";
import { Either, left, right } from "../../../shared/Either";
import Err from "../../../shared/Err";
import AuthenticateUseCase from "../../../business/useCases/authentication/AuthenticateUseCase";
import validationError from "../../../domain/errors/validationError";
import LoginValidator, {
  InputLogin,
} from "../../serializers/authenticate/LoginValidator";

export type OutputLoginController = Either<
  Err,
  {
    token: string;
  }
>;

export default class LoginController extends AbstractController<
  InputLogin,
  OutputLoginController
> {
  constructor(private authenticateUseCase: AuthenticateUseCase) {
    super();
  }

  async handle(input: InputLogin): Promise<OutputLoginController> {
    const instance = new LoginValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    const accessToken = await this.authenticateUseCase.execute({
      email: instance.email,
      password: instance.password,
    });

    if (accessToken.isLeft()) {
      return left(accessToken.value);
    }

    return right({ token: accessToken.value });
  }
}
