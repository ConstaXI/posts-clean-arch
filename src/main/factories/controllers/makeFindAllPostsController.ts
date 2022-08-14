import FindAllPostsController from "../../../presentation/controllers/post/FindAllPostsController";
import makeFindAllPostsUseCase from "../useCases/makeFindAllPostsUseCase";

export default function makeFindAllPostsController() {
  return new FindAllPostsController(makeFindAllPostsUseCase());
}
