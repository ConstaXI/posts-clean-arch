import { fakeInputFindAllPostsController } from "../../../fakes/post/PostEntity";
import FakePostRepository from "../../../mocks/repositories/FakePostRepository";
import Err from "../../../../src/shared/Err";
import FindAllPostsController from "../../../../src/presentation/controllers/post/FindAllPostsController";
import FindAllPostsUseCase from "../../../../src/business/useCases/post/FindAllPostsUseCase";

describe("FindPostByIdController", () => {
  let controller: FindAllPostsController;

  beforeAll(() => {
    controller = new FindAllPostsController(
      new FindAllPostsUseCase(new FakePostRepository())
    );
  });

  it("Should return correct value", async () => {
    const post = await controller.handle(fakeInputFindAllPostsController);
    expect(post.isRight()).toBeTruthy();
  });

  it("Should return validation error if input is incorrect", async () => {
    const post = await controller.handle({ limit: "999", page: "1" });
    expect(post.isLeft()).toBeTruthy();
    expect((post.value as Err).body.details).toHaveProperty("length");
  });
});
