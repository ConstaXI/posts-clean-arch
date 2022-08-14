import EditPostController from "../../../../presentation/controllers/post/EditPostController";
import makeFindPostByIdUseCase from "../../useCases/post/makeFindPostByIdUseCase";
import makeEditPostUseCase from "../../useCases/post/makeEditPostUseCase";

export default function makeEditPostController() {
  return new EditPostController(
    makeFindPostByIdUseCase(),
    makeEditPostUseCase()
  );
}
