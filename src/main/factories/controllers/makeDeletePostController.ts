import makeFindPostByIdUseCase from "../useCases/makeFindPostByIdUseCase";
import makeDeletePostUseCase from "../useCases/makeDeletePostUseCase";
import DeletePostController from "../../../presentation/controllers/post/DeletePostController";

export default function makeDeletePostController() {
  return new DeletePostController(
    makeDeletePostUseCase(),
    makeFindPostByIdUseCase()
  );
}
