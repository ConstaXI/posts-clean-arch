import CreatePostController from "../../../presentation/controllers/post/CreatePostController";
import makeCreatePostUseCaseFactory from "../useCases/createPostUseCaseFactory";

export default function makeCreatePostController() {
  return new CreatePostController(makeCreatePostUseCaseFactory());
}
