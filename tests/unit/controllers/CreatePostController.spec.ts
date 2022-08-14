import { fakeInputCreatePostController } from "../../fakes/post/PostEntity";
import FakePostRepository from "../../mocks/repositories/FakePostRepository";
import CreatePostUseCase from "../../../src/business/useCases/post/CreatePostUseCase";
import FakeGenerateObjectId from "../../mocks/services/FakeGenerateObjectId";
import { Post } from "../../../src/domain/entities/Post";
import CreatePostController from "../../../src/presentation/controllers/post/CreatePostController";
import CreatePostValidator from "../../../src/presentation/serializers/post/CreatePostValidator";
import Err from "../../../src/shared/Err";

describe("CreatePostUseCase", () => {
  let controller: CreatePostController;

  beforeAll(() => {
    controller = new CreatePostController(
      new CreatePostUseCase(
        new FakeGenerateObjectId(),
        new FakePostRepository()
      )
    );
  });

  it("Should return correct value", async () => {
    const post = await controller.handle(fakeInputCreatePostController);
    expect(post.isRight()).toBeTruthy();
    expect((post.value as Post).createdAt).toBeDefined();
    expect((post.value as Post).updatedAt).toBeDefined();
  });

  it("Should return validation error if input is incorrect", async () => {
    const post = await controller.handle(
      new CreatePostValidator({
        title: "",
        body: "",
        tags: [],
      })
    );
    expect(post.isLeft()).toBeTruthy();
    expect((post.value as Err).body.details).toHaveProperty("length");
  });
});
