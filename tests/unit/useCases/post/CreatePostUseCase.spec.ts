import { fakeInputCreatePostUseCase } from "../../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositorySave,
} from "../../../mocks/repositories/FakePostRepository";
import CreatePostUseCase from "../../../../src/business/useCases/post/CreatePostUseCase";
import FakeGenerateObjectId from "../../../mocks/services/FakeGenerateObjectId";
import { PostEntity } from "../../../../src/domain/entities/Post";

describe("CreatePostUseCase", () => {
  let useCase: CreatePostUseCase;

  beforeAll(() => {
    useCase = new CreatePostUseCase(
      new FakeGenerateObjectId(),
      new FakePostRepository()
    );
  });

  it("Should return correct value", async () => {
    const post = await useCase.execute(fakeInputCreatePostUseCase);
    expect(post.isRight()).toBeTruthy();
    expect(post.value).toBeInstanceOf(PostEntity);
    const raw = (post.value as PostEntity).export();
    expect(raw.createdAt).toBeDefined();
    expect(raw.updatedAt).toBeDefined();
  });

  it("Should call repository with correct values", async () => {
    const post = await useCase.execute(fakeInputCreatePostUseCase);
    expect(post.isRight()).toBeTruthy();
    const raw = (post.value as PostEntity).export();
    expect(fakePostRepositorySave).toHaveBeenCalledWith({
      ...raw,
      id: "fakeGeneratedId",
    });
  });
});
