import { fakeInputCreatePostUseCase } from "../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositorySave,
} from "../../mocks/repositories/FakePostRepository";
import DatabaseErrors from "../../../src/domain/errors/DatabaseErrors";
import CreatePostUseCase from "../../../src/business/useCases/post/CreatePostUseCase";
import FakeGenerateObjectId from "../../mocks/services/FakeGenerateObjectId";
import { PostEntity } from "../../../src/domain/entities/Post";
import { left } from "../../../src/shared/either";

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
    const raw = (post.value as PostEntity).export();
    expect(raw.createdAt).toBeDefined();
    expect(raw.updatedAt).toBeDefined();
  });

  it("Should return formatted error http response if repository throws", async () => {
    const error = new Error("fakeError");
    const databaseError = DatabaseErrors.failedToSave(error);
    fakePostRepositorySave.mockResolvedValueOnce(left(databaseError));
    const err = await useCase.execute(fakeInputCreatePostUseCase);
    expect(err.isLeft()).toBeTruthy();
    expect((err.value as DatabaseErrors).body.runtimeErr).toBe(error);
  });
});
