import makeFindPostByIdUseCase from "../../useCases/post/makeFindPostByIdUseCase";
import makeDeletePostUseCase from "../../useCases/post/makeDeletePostUseCase";
import DeletePostController from "../../../../presentation/controllers/post/DeletePostController";

export default function makeDeletePostController() {
  return new DeletePostController(
    makeDeletePostUseCase(),
    makeFindPostByIdUseCase()
  );
}
