import FakePostRepository, {
  fakePostRepositoryFindBy,
} from "../../mocks/repositories/FakePostRepository";
import FindPostByIdUseCase from "../../../src/business/useCases/post/FindPostByIdUseCase";
import { fakeInputFindPostByIdUseCase } from "../../fakes/post/PostEntity";
import notFound from "../../../src/domain/errors/notFound";

describe("FindPostByIdUseCase", () => {
  let useCase: FindPostByIdUseCase;

  beforeAll(() => {
    useCase = new FindPostByIdUseCase(new FakePostRepository());
  });

  it("Should return correct value", async () => {
    const post = await useCase.execute(fakeInputFindPostByIdUseCase);
    expect(post.isRight()).toBeTruthy();
  });

  it("Should call repository with correct values", async () => {
    await useCase.execute(fakeInputFindPostByIdUseCase);
    expect(fakePostRepositoryFindBy).toHaveBeenCalledWith(
      fakeInputFindPostByIdUseCase
    );
  });

  it("Should return formatted http response error if no post was found", async () => {
    fakePostRepositoryFindBy.mockResolvedValueOnce(null);
    const post = await useCase.execute(fakeInputFindPostByIdUseCase);
    expect(post.isLeft()).toBeTruthy();
    expect(post.value).toEqual(notFound());
  });
});
