import AbstractController from "../AbstractController";
import FindPostByIdValidator, {
  InputFindPostByIdController,
} from "../../serializers/post/FindPostByIdValidator";
import { Either, left, right } from "../../../shared/either";
import Err from "../../../shared/IError";
import { Post } from "../../../domain/entities/Post";
import FindPostByIdUseCase from "../../../business/useCases/post/FindPostByIdUseCase";
import validationError from "../../../domain/errors/validationError";

type OutputFindPostByIdController = Either<Err, Post>;

export default class FindPostByIdController extends AbstractController<
  InputFindPostByIdController,
  OutputFindPostByIdController
> {
  constructor(private findPostByIdUseCase: FindPostByIdUseCase) {
    super();
  }

  async handle(
    input: InputFindPostByIdController
  ): Promise<OutputFindPostByIdController> {
    const instance = new FindPostByIdValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    const post = await this.findPostByIdUseCase.execute(input);

    if (post.isLeft()) {
      return left(post.value);
    }

    return right(post.value.export());
  }
}
