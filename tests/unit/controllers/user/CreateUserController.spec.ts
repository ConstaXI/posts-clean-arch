import CreateUserController from "../../../../src/presentation/controllers/user/CreateUserController";
import FindUserByEmailUseCase from "../../../../src/business/useCases/user/FindUserByEmailUseCase";
import FakeUserRepository, {
  fakeUserRepositoryFindBy,
} from "../../../mocks/repositories/FakeUserRepository";
import CreateUserUseCase from "../../../../src/business/useCases/user/CreateUserUseCase";
import FakeGenerateObjectId from "../../../mocks/services/FakeGenerateObjectId";
import FakeBcrypt from "../../../mocks/criptography/FakeBcrypt";
import { fakeInputCreateUserEntity } from "../../../fakes/user/UserEntity";
import emailAlreadyExists from "../../../../src/domain/errors/emailAlreadyExists";
import Err from "../../../../src/shared/Err";

describe("CreateUserController", () => {
  let controller: CreateUserController;

  beforeEach(() => {
    controller = new CreateUserController(
      new FindUserByEmailUseCase(new FakeUserRepository()),
      new CreateUserUseCase(
        new FakeUserRepository(),
        new FakeGenerateObjectId(),
        new FakeBcrypt()
      )
    );
  });

  it("Should return validation error if input is incorrect", async () => {
    const user = await controller.handle({
      email: "invalidEmail",
      password: "anything",
    });
    expect(user.isLeft()).toBeTruthy();
    expect(user.value).toBeInstanceOf(Err);
  });

  it("Should be able to create a user", async () => {
    fakeUserRepositoryFindBy.mockResolvedValueOnce(null);
    const user = await controller.handle(fakeInputCreateUserEntity);
    expect(user.isRight()).toBeTruthy();
    expect(user.value).toBeDefined();
  });

  it("Should return alreadyExistsError if email is already in use", async () => {
    const user = await controller.handle(fakeInputCreateUserEntity);
    expect(user.isLeft()).toBeTruthy();
    expect(user.value).toEqual(emailAlreadyExists());
  });
});
