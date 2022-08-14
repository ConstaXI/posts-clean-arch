import { fakeInputDeletePostUseCase } from "../../../fakes/post/PostEntity";
import FakePostRepository, {
  fakePostRepositoryDelete,
} from "../../../mocks/repositories/FakePostRepository";
import DeletePostUseCase from "../../../../src/business/useCases/post/DeletePostUseCase";

describe("DeletePostUseCase", () => {
  let useCase: DeletePostUseCase;

  beforeAll(() => {
    useCase = new DeletePostUseCase(new FakePostRepository());
  });

  it("Should call repository with correct values", async () => {
    await useCase.execute(fakeInputDeletePostUseCase);
    expect(fakePostRepositoryDelete).toHaveBeenCalledWith(
      fakeInputDeletePostUseCase
    );
  });
});
