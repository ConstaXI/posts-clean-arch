import { fakeInputDeletePostController } from "../../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositoryFindBy,
} from "../../../mocks/repositories/FakePostRepository";
import DeletePostController from "../../../../src/presentation/controllers/post/DeletePostController";
import DeletePostUseCase from "../../../../src/business/useCases/post/DeletePostUseCase";
import FindPostByIdUseCase from "../../../../src/business/useCases/post/FindPostByIdUseCase";
import notFound from "../../../../src/domain/errors/notFound";
import Err from "../../../../src/shared/Err";

describe("DeletePostController", () => {
  let controller: DeletePostController;

  beforeAll(() => {
    controller = new DeletePostController(
      new DeletePostUseCase(new FakePostRepository()),
      new FindPostByIdUseCase(new FakePostRepository())
    );
  });

  it("Should not return any error", async () => {
    const post = await controller.handle(fakeInputDeletePostController);
    expect(post.isLeft()).toBeFalsy();
  });

  it("Should pass along validation errors", async () => {
    const error = await controller.handle({ id: "invalid" });
    expect(error.isLeft()).toBeTruthy();
    expect(error.value).toBeInstanceOf(Err);
    expect((error.value as Err).body).toHaveProperty("details");
  });

  it("Should pass along error 404 if no post was found", async () => {
    fakePostRepositoryFindBy.mockResolvedValueOnce(null);
    const post = await controller.handle(fakeInputDeletePostController);
    expect(post.isLeft()).toBeTruthy();
    expect(post.value).toEqual(notFound());
  });
});
