import CreatePostController from "../../../../presentation/controllers/post/CreatePostController";
import makeCreatePostUseCase from "../../useCases/post/makeCreatePostUseCase";

export default function makeCreatePostController() {
  return new CreatePostController(makeCreatePostUseCase());
}
