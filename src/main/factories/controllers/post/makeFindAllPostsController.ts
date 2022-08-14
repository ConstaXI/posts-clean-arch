import FindAllPostsController from "../../../../presentation/controllers/post/FindAllPostsController";
import makeFindAllPostsUseCase from "../../useCases/post/makeFindAllPostsUseCase";

export default function makeFindAllPostsController() {
  return new FindAllPostsController(makeFindAllPostsUseCase());
}
