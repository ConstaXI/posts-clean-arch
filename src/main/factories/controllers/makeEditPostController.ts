import EditPostController from "../../../presentation/controllers/post/EditPostController";
import makeFindPostByIdUseCase from "../useCases/makeFindPostByIdUseCase";
import makeEditPostUseCase from "../useCases/makeEditPostUseCase";

export default function makeEditPostController() {
  return new EditPostController(
    makeFindPostByIdUseCase(),
    makeEditPostUseCase()
  );
}
