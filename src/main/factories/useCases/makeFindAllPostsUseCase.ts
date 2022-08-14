import FindAllPostsUseCase from "../../../business/useCases/post/FindAllPostsUseCase";
import PostRepository from "../../../infra/repositories/PostRepository";

export default function makeFindAllPostsUseCase(): FindAllPostsUseCase {
  return new FindAllPostsUseCase(new PostRepository());
}
