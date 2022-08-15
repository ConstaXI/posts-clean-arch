import AbstractController from "../AbstractController";
import CreateUserValidator, {
  InputCreateUserController,
} from "../../serializers/user/CreateUserValidator";
import { Either, left, right } from "../../../shared/Either";
import Err from "../../../shared/Err";
import { User } from "../../../domain/entities/User";
import CreateUserUseCase from "../../../business/useCases/user/CreateUserUseCase";
import validationError from "../../../domain/errors/validationError";
import FindUserByEmailUseCase from "../../../business/useCases/user/FindUserByEmailUseCase";
import emailAlreadyExists from "../../../domain/errors/emailAlreadyExists";
import passwordsDontMatch from "../../../domain/errors/passwordsDontMatch";

export type OutputCreateUserController = Either<Err, User>;

export default class CreateUserController extends AbstractController<
  InputCreateUserController,
  OutputCreateUserController
> {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly createUserUseCase: CreateUserUseCase
  ) {
    super();
  }

  async handle(
    input: InputCreateUserController
  ): Promise<OutputCreateUserController> {
    const instance = new CreateUserValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    if (instance.password !== instance.passwordConfirmation) {
      return left(passwordsDontMatch());
    }

    const alreadyExists = await this.findUserByEmailUseCase.execute({
      email: instance.email,
    });

    if (alreadyExists.isRight()) {
      return left(emailAlreadyExists());
    }

    const user = await this.createUserUseCase.execute(instance);

    if (user.isLeft()) {
      return left(user.value);
    }

    return right(user.value.export());
  }
}
