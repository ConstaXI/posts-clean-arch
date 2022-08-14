import FakeUserRepository, {
  fakeUserRepositoryFindBy,
} from "../../../mocks/repositories/FakeUserRepository";
import { fakeInputFindUserByEmail } from "../../../fakes/user/UserEntity";
import { UserEntity } from "../../../../src/domain/entities/User";
import FindUserByEmailUseCase from "../../../../src/business/useCases/user/FindUserByEmailUseCase";
import notFound from "../../../../src/domain/errors/notFound";

describe("FindUserByEmailUseCase", () => {
  let useCase: FindUserByEmailUseCase;

  beforeAll(() => {
    useCase = new FindUserByEmailUseCase(new FakeUserRepository());
  });

  it("Should return correct value", async () => {
    const user = await useCase.execute(fakeInputFindUserByEmail);
    expect(user.isRight()).toBeTruthy();
    expect(user.value).toBeInstanceOf(UserEntity);
    expect((user.value as UserEntity).export()).toBeDefined();
  });

  it("Should call repository with correct values", async () => {
    await useCase.execute(fakeInputFindUserByEmail);
    expect(fakeUserRepositoryFindBy).toHaveBeenCalledWith(
      fakeInputFindUserByEmail
    );
  });

  it("Should return error 404 if no user was found", async () => {
    fakeUserRepositoryFindBy.mockResolvedValueOnce(null);
    const user = await useCase.execute(fakeInputFindUserByEmail);
    expect(user.isLeft()).toBeTruthy();
    expect(user.value).toEqual(notFound());
  });
});
