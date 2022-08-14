import PostRepository from "../../../../infra/repositories/PostRepository";
import FindPostByIdUseCase from "../../../../business/useCases/post/FindPostByIdUseCase";

export default function makeFindPostByIdUseCase() {
  return new FindPostByIdUseCase(new PostRepository());
}
