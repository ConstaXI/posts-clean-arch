import AbstractController from "../AbstractController";
import { Post } from "../../../domain/entities/Post";
import { Either, left, right } from "../../../shared/either";
import Err from "../../../shared/IError";
import InputCreatePostController from "../../serializers/post/InputCreatePostController";
import CreatePostUseCase from "../../../business/useCases/post/CreatePostUseCase";

type OutputCreatePostController = Either<Err, Post>;

export default class CreatePostController extends AbstractController<
  InputCreatePostController,
  OutputCreatePostController
> {
  constructor(private readonly createPostUseCase: CreatePostUseCase) {
    super();
  }

  async handle(
    input: InputCreatePostController
  ): Promise<OutputCreatePostController> {
    const instance = new InputCreatePostController(input);

    this.validate(instance);

    const post = await this.createPostUseCase.execute(input);

    if (post.isLeft()) {
      return left(post.value);
    }

    return right(post.value.export());
  }
}
