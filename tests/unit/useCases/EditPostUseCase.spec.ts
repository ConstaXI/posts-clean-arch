import { fakeInputEditPostUseCase } from "../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositorySave,
} from "../../mocks/repositories/FakePostRepository";
import { PostEntity } from "../../../src/domain/entities/Post";
import EditPostUseCase from "../../../src/business/useCases/post/EditPostUseCase";

describe("EditPostUseCase", () => {
  let useCase: EditPostUseCase;

  beforeAll(() => {
    useCase = new EditPostUseCase(new FakePostRepository());
  });

  it("Should return values that will be updated", async () => {
    const post = await useCase.execute(fakeInputEditPostUseCase);
    expect(post.isRight()).toBeTruthy();
    const raw = (post.value as PostEntity).export();
    expect(raw.title).toBe(fakeInputEditPostUseCase.title);
  });

  it("Should call repository with correct values", async () => {
    const post = await useCase.execute(fakeInputEditPostUseCase);
    expect(post.isRight()).toBeTruthy();
    const raw = (post.value as PostEntity).export();
    expect(fakePostRepositorySave).toHaveBeenCalledWith(raw);
  });
});
