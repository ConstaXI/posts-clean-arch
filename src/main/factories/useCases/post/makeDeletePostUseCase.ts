import PostRepository from "../../../../infra/repositories/PostRepository";
import DeletePostUseCase from "../../../../business/useCases/post/DeletePostUseCase";

export default function makeDeletePostUseCase() {
  return new DeletePostUseCase(new PostRepository());
}
