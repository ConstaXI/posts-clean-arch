import CreatePostUseCase from "../../../business/useCases/post/CreatePostUseCase";
import GenerateObjectId from "../../../infra/services/generateObjectId";
import PostRepository from "../../../infra/repositories/PostRepository";

export default function makeCreateUseCaseFactory() {
  return new CreatePostUseCase(new GenerateObjectId(), new PostRepository());
}
