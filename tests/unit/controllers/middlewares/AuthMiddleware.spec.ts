import FakeJwt, { fakeJwtDecrypt } from "../../../mocks/criptography/FakeJwt";
import {
  AuthMiddleware,
  AuthRequest,
} from "../../../../src/presentation/middlewares/AuthMiddleware";
import unauthorized from "../../../../src/domain/errors/unauthorized";
import forbidden from "../../../../src/domain/errors/forbidden";

describe("LoginController", () => {
  let middleware: AuthMiddleware;
  const input = { token: "fakeToken" };

  beforeAll(() => {
    middleware = new AuthMiddleware(new FakeJwt());
  });

  it("Should return fakeDecryptedId", async () => {
    const userId = await middleware.handle(input);
    expect(userId.isRight()).toBeTruthy();
    expect((userId.value as { userId: string }).userId).toBe("fakeDecryptedId");
  });

  it("Should return unauthorized error if there is no token", async () => {
    const userId = await middleware.handle({
      token: null,
    } as unknown as AuthRequest);
    expect(userId.isLeft()).toBeTruthy();
    expect(userId.value).toEqual(unauthorized());
  });

  it("Should return forbidden if token is invalid", async () => {
    fakeJwtDecrypt.mockImplementationOnce(() => {
      throw new Error();
    });
    const userId = await middleware.handle(input);
    expect(userId.isLeft()).toBeTruthy();
    expect(userId.value).toEqual(forbidden());
  });
});
