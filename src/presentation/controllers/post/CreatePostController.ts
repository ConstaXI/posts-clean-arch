import AbstractController from "../AbstractController";
import { InputCreatePostEntity, Post } from "../../../domain/entities/Post";
import { Either, left, right } from "../../../shared/either";
import Err from "../../../shared/IError";
import CreatePostValidator from "../../serializers/post/CreatePostValidator";
import CreatePostUseCase from "../../../business/useCases/post/CreatePostUseCase";
import validationError from "../../../domain/errors/validationError";

type OutputCreatePostController = Either<Err, Post>;

export default class CreatePostController extends AbstractController<
  InputCreatePostEntity,
  OutputCreatePostController
> {
  constructor(private readonly createPostUseCase: CreatePostUseCase) {
    super();
  }

  async handle(
    input: InputCreatePostEntity
  ): Promise<OutputCreatePostController> {
    const instance = new CreatePostValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    const post = await this.createPostUseCase.execute(input);

    if (post.isLeft()) {
      return left(post.value);
    }

    return right(post.value.export());
  }
}
