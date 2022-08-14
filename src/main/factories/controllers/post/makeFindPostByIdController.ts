import makeFindPostByIdUseCase from "../../useCases/post/makeFindPostByIdUseCase";
import FindPostByIdController from "../../../../presentation/controllers/post/FindPostByIdController";

export default function makeFindPostByIdController() {
  return new FindPostByIdController(makeFindPostByIdUseCase());
}
