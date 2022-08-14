import { IUseCase } from "../IUseCase";
import {
  InputFindAllPostsUseCase,
  OutputFindAllPostsUseCase,
} from "../../dto/useCases/post/findAll";
import IFindAllPosts from "../../repositories/post/IFindAllPosts";
import { right } from "../../../shared/Either";

export default class FindAllPostsUseCase
  implements IUseCase<InputFindAllPostsUseCase, OutputFindAllPostsUseCase>
{
  constructor(private readonly postsRepository: IFindAllPosts) {}

  async execute({
    limit,
    page,
  }: InputFindAllPostsUseCase): Promise<OutputFindAllPostsUseCase> {
    const posts = await this.postsRepository.findAll({ limit, page });

    return right(posts);
  }
}
