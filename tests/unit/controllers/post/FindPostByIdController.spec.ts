import { fakeInputFindPostByIdController } from "../../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositoryFindBy,
} from "../../../mocks/repositories/FakePostRepository";
import { Post } from "../../../../src/domain/entities/Post";
import Err from "../../../../src/shared/Err";
import FindPostByIdController from "../../../../src/presentation/controllers/post/FindPostByIdController";
import FindPostByIdUseCase from "../../../../src/business/useCases/post/FindPostByIdUseCase";

describe("FindPostByIdController", () => {
  let controller: FindPostByIdController;

  beforeAll(() => {
    controller = new FindPostByIdController(
      new FindPostByIdUseCase(new FakePostRepository())
    );
  });

  it("Should return correct value", async () => {
    const post = await controller.handle(fakeInputFindPostByIdController);
    expect(post.isRight()).toBeTruthy();
    expect((post.value as Post).createdAt).toBeDefined();
    expect((post.value as Post).updatedAt).toBeDefined();
  });

  it("Should pass along notFound error if repository returns null", async () => {
    fakePostRepositoryFindBy.mockResolvedValueOnce(null);
    const post = await controller.handle(fakeInputFindPostByIdController);
    expect(post.isLeft()).toBeTruthy();
    expect((post.value as Err).statusCode).toBe(404);
  });

  it("Should return validation error if input is incorrect", async () => {
    const post = await controller.handle({ id: "invalidUuid" });
    expect(post.isLeft()).toBeTruthy();
    expect((post.value as Err).body.details).toHaveProperty("length");
  });
});
