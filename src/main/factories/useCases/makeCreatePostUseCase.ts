import CreatePostUseCase from "../../../business/useCases/post/CreatePostUseCase";
import GenerateUuid from "../../../infra/services/generateUuid";
import PostRepository from "../../../infra/repositories/PostRepository";

export default function makeCreatePostUseCase() {
  return new CreatePostUseCase(new GenerateUuid(), new PostRepository());
}
