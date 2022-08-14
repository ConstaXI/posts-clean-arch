import PostRepository from "../../../infra/repositories/PostRepository";
import EditPostUseCase from "../../../business/useCases/post/EditPostUseCase";

export default function makeEditPostUseCase() {
  return new EditPostUseCase(new PostRepository());
}
