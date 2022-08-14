import CreatePostController from "../../../presentation/controllers/post/CreatePostController";
import makeCreatePostUseCase from "../useCases/makeCreatePostUseCase";

export default function makeCreatePostController() {
  return new CreatePostController(makeCreatePostUseCase());
}
