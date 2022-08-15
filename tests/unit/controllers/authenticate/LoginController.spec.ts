import Err from "../../../../src/shared/Err";
import LoginController from "../../../../src/presentation/controllers/authenticate/LoginController";
import AuthenticateUseCase from "../../../../src/business/useCases/authentication/AuthenticateUseCase";
import FakeUserRepository from "../../../mocks/repositories/FakeUserRepository";
import FakeBcrypt, {
  fakeCompare,
} from "../../../mocks/criptography/FakeBcrypt";
import FakeJwt from "../../../mocks/criptography/FakeJwt";
import { fakeInputLogin } from "../../../fakes/auth/fakeAuth";

describe("LoginController", () => {
  let controller: LoginController;

  beforeAll(() => {
    controller = new LoginController(
      new AuthenticateUseCase(
        new FakeUserRepository(),
        new FakeBcrypt(),
        new FakeJwt()
      )
    );
  });

  it("Should return correct value", async () => {
    const accessToken = await controller.handle(fakeInputLogin);
    expect(accessToken.isRight()).toBeTruthy();
    expect((accessToken.value as { token: string }).token).toBeDefined();
  });

  it("Should pass along validation errors", async () => {
    const error = await controller.handle({
      email: "invalid",
      password: "123456",
    });
    expect(error.isLeft()).toBeTruthy();
    expect(error.value).toBeInstanceOf(Err);
    expect((error.value as Err).body).toHaveProperty("details");
  });

  it("Should pass along any error", async () => {
    fakeCompare.mockResolvedValueOnce(false);
    const accessToken = await controller.handle(fakeInputLogin);
    expect(accessToken.isLeft()).toBeTruthy();
    expect(accessToken.value).toBeInstanceOf(Err);
  });
});
