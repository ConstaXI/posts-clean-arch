import AuthenticateUseCase from "../../../../src/business/useCases/authentication/AuthenticateUseCase";
import FakeUserRepository, {
  fakeUserRepositoryFindBy,
} from "../../../mocks/repositories/FakeUserRepository";
import FakeBcrypt, {
  fakeCompare,
} from "../../../mocks/criptography/FakeBcrypt";
import FakeJwt from "../../../mocks/criptography/FakeJwt";
import { fakeInputAuthenticate } from "../../../fakes/auth/fakeAuth";
import notFound from "../../../../src/domain/errors/notFound";
import forbidden from "../../../../src/domain/errors/forbidden";

describe("AuthenticateUseCase", () => {
  let useCase: AuthenticateUseCase;

  beforeAll(() => {
    useCase = new AuthenticateUseCase(
      new FakeUserRepository(),
      new FakeBcrypt(),
      new FakeJwt()
    );
  });

  it("Should call findUserBy with correct values", async () => {
    await useCase.execute(fakeInputAuthenticate);
    expect(fakeUserRepositoryFindBy).toHaveBeenCalledWith({
      email: fakeInputAuthenticate.email,
    });
  });

  it("Should return accessToken", async () => {
    const token = await useCase.execute(fakeInputAuthenticate);
    expect(token.isRight()).toBeTruthy();
    expect(token.value).toBe("fakeGeneratedToken");
  });

  it("Should return notFound if no user was found by the given email", async () => {
    fakeUserRepositoryFindBy.mockResolvedValueOnce(null);
    const token = await useCase.execute(fakeInputAuthenticate);
    expect(token.isLeft()).toBeTruthy();
    expect(token.value).toEqual(notFound());
  });

  it("Should return forbidden if password is wrong", async () => {
    fakeCompare.mockResolvedValueOnce(false);
    const token = await useCase.execute(fakeInputAuthenticate);
    expect(token.isLeft()).toBeTruthy();
    expect(token.value).toEqual(forbidden());
  });
});
