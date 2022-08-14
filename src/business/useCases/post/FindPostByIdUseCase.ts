import { IUseCase } from "../IUseCase";
import {
  InputFindPostByIdUseCase,
  OutputFindPostByIdUseCase,
} from "../../dto/useCases/post/findBy";
import IFindPostBy from "../../protocols/db/repositories/post/IFindPostBy";
import { left, right } from "../../../shared/Either";
import notFound from "../../../domain/errors/notFound";

export default class FindPostByIdUseCase
  implements IUseCase<InputFindPostByIdUseCase, OutputFindPostByIdUseCase>
{
  constructor(private postRepository: IFindPostBy) {}

  async execute(
    input: InputFindPostByIdUseCase
  ): Promise<OutputFindPostByIdUseCase> {
    const post = await this.postRepository.findBy({ id: input.id });

    if (!post) {
      return left(notFound());
    }

    return right(post);
  }
}
