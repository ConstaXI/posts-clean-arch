import AbstractController from "../AbstractController";
import { OutputFindAllPostsUseCase } from "../../../business/dto/useCases/post/findAll";
import { left } from "../../../shared/Either";
import validationError from "../../../domain/errors/validationError";
import FindAllPostsValidator, {
  InputFindAllPostsController,
} from "../../serializers/post/FindAllPostsValidator";
import FindAllPostsUseCase from "../../../business/useCases/post/FindAllPostsUseCase";

export type OutputFindAllPostsController = OutputFindAllPostsUseCase;

export default class FindAllPostsController extends AbstractController<
  InputFindAllPostsController,
  OutputFindAllPostsController
> {
  constructor(private readonly findAllPostsUseCase: FindAllPostsUseCase) {
    super();
  }

  async handle(
    input: InputFindAllPostsController
  ): Promise<OutputFindAllPostsController> {
    const instance = new FindAllPostsValidator(input);

    const hasErr = this.validate(instance);

    if (hasErr) {
      return left(validationError(hasErr));
    }

    return this.findAllPostsUseCase.execute(instance);
  }
}
