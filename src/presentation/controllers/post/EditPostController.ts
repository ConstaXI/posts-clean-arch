import AbstractController from "../AbstractController";
import EditPostValidator, {
  InputEditPostController,
} from "../../serializers/post/EditPostValidator";
import { OutputEditPostUseCase } from "../../../business/dto/useCases/post/edit";
import EditPostUseCase from "../../../business/useCases/post/EditPostUseCase";
import { left } from "../../../shared/Either";
import validationError from "../../../domain/errors/validationError";
import FindPostByIdUseCase from "../../../business/useCases/post/FindPostByIdUseCase";

export type OutputEditPostController = OutputEditPostUseCase;

export default class EditPostController extends AbstractController<
  InputEditPostController,
  OutputEditPostController
> {
  constructor(
    private readonly findPostByIdUseCase: FindPostByIdUseCase,
    private readonly editPostUseCase: EditPostUseCase
  ) {
    super();
  }

  async handle(
    input: InputEditPostController
  ): Promise<OutputEditPostController> {
    const instance = new EditPostValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    const post = await this.findPostByIdUseCase.execute({ id: instance.id });

    if (post.isLeft()) {
      return post;
    }

    return this.editPostUseCase.execute(instance);
  }
}
