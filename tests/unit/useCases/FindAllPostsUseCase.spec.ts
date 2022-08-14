import FakePostRepository, {
  fakePostRepositoryFindAll,
} from "../../mocks/repositories/FakePostRepository";
import { fakeInputFindAllPostsUseCase } from "../../fakes/post/PostEntity";
import FindAllPostsUseCase from "../../../src/business/useCases/post/FindAllPostsUseCase";
import { Paginated } from "../../../src/domain/entities/utils/paginated";
import { Post } from "../../../src/domain/entities/Post";

describe("FindPostByIdUseCase", () => {
  let useCase: FindAllPostsUseCase;

  beforeAll(() => {
    useCase = new FindAllPostsUseCase(new FakePostRepository());
  });

  it("Should return correct value", async () => {
    const posts = await useCase.execute(fakeInputFindAllPostsUseCase);
    expect(posts.isRight()).toBeTruthy();
    expect((posts.value as Paginated<Post>).results.length).toBeDefined();
    expect((posts.value as Paginated<Post>).results.length).not.toBeGreaterThan(
      fakeInputFindAllPostsUseCase.limit
    );
  });

  it("Should call repository with correct values", async () => {
    await useCase.execute(fakeInputFindAllPostsUseCase);
    expect(fakePostRepositoryFindAll).toHaveBeenCalledWith(
      fakeInputFindAllPostsUseCase
    );
  });
});
