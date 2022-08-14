import { fakeInputEditPostUseCase } from "../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositoryFindBy,
} from "../../mocks/repositories/FakePostRepository";
import { PostEntity } from "../../../src/domain/entities/Post";
import Err from "../../../src/shared/Err";
import EditPostController from "../../../src/presentation/controllers/post/EditPostController";
import FindPostByIdUseCase from "../../../src/business/useCases/post/FindPostByIdUseCase";
import EditPostUseCase from "../../../src/business/useCases/post/EditPostUseCase";
import EditPostValidator from "../../../src/presentation/serializers/post/EditPostValidator";
import notFound from "../../../src/domain/errors/notFound";

describe("EditPostController", () => {
  let controller: EditPostController;

  beforeAll(() => {
    controller = new EditPostController(
      new FindPostByIdUseCase(new FakePostRepository()),
      new EditPostUseCase(new FakePostRepository())
    );
  });

  it("Should return post updated fields", async () => {
    const post = await controller.handle(fakeInputEditPostUseCase);
    expect(post.isRight()).toBeTruthy();
    const raw = (post.value as PostEntity).export();
    expect(raw.title).toBe(fakeInputEditPostUseCase.title);
    expect(raw.body).not.toBeDefined();
  });

  it("Should pass along error 404 if no post was found", async () => {
    fakePostRepositoryFindBy.mockResolvedValueOnce(null);
    const post = await controller.handle(fakeInputEditPostUseCase);
    expect(post.isLeft()).toBeTruthy();
    expect(post.value).toEqual(notFound());
  });

  it("Should return validation error if input is incorrect", async () => {
    const post = await controller.handle(
      new EditPostValidator({
        id: "invalidUuid",
        title: "",
      })
    );
    expect(post.isLeft()).toBeTruthy();
    expect(post.value).toBeInstanceOf(Err);
  });
});
