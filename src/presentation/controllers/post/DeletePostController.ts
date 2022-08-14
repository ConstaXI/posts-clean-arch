import AbstractController from "../AbstractController";
import { InputFindPostByIdController } from "../../serializers/post/FindPostByIdValidator";
import { Either, left } from "../../../shared/Either";
import Err from "../../../shared/Err";
import validationError from "../../../domain/errors/validationError";
import DeletePostUseCase from "../../../business/useCases/post/DeletePostUseCase";
import DeletePostValidator, {
  InputDeletePostController,
} from "../../serializers/post/DeletePostValidator";
import FindPostByIdUseCase from "../../../business/useCases/post/FindPostByIdUseCase";

type OutputDeletePostController = Either<Err, void>;

export default class DeletePostController extends AbstractController<
  InputDeletePostController,
  OutputDeletePostController
> {
  constructor(
    private deletePostUseCase: DeletePostUseCase,
    private findPostByIdUseCase: FindPostByIdUseCase
  ) {
    super();
  }

  async handle(
    input: InputFindPostByIdController
  ): Promise<OutputDeletePostController> {
    const instance = new DeletePostValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    const post = await this.findPostByIdUseCase.execute(instance);

    if (post.isLeft()) {
      return left(post.value);
    }

    return this.deletePostUseCase.execute(instance);
  }
}
