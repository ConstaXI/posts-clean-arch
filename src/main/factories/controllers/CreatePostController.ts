import CreatePostController from "../../../presentation/controllers/post/CreatePostController";
import makeCreateUseCaseFactory from "../useCases/createPostUseCaseFactory";

export default function makeCreatePostController() {
  return new CreatePostController(makeCreateUseCaseFactory());
}
