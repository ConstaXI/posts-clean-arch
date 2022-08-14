import FakeGenerateObjectId from "../../../mocks/services/FakeGenerateObjectId";
import CreateUserUseCase from "../../../../src/business/useCases/user/CreateUserUseCase";
import FakeUserRepository, {
  fakeUserRepositorySave,
} from "../../../mocks/repositories/FakeUserRepository";
import { fakeInputCreateUserEntity } from "../../../fakes/user/UserEntity";
import { UserEntity } from "../../../../src/domain/entities/User";
import FakeBcrypt, { fakeHash } from "../../../mocks/criptography/FakeBcrypt";

describe("CreateUserUseCase", () => {
  let useCase: CreateUserUseCase;

  beforeAll(() => {
    useCase = new CreateUserUseCase(
      new FakeUserRepository(),
      new FakeGenerateObjectId(),
      new FakeBcrypt()
    );
  });

  it("Should return correct value", async () => {
    const user = await useCase.execute(fakeInputCreateUserEntity);
    expect(user.isRight()).toBeTruthy();
    expect(user.value).toBeInstanceOf(UserEntity);
    const raw = (user.value as UserEntity).export();
    expect(raw.createdAt).toBeDefined();
    expect(raw.updatedAt).toBeDefined();
    expect(raw.password).toBe("fakeHashedPassword");
  });

  it("Should call repository with correct values", async () => {
    const user = await useCase.execute(fakeInputCreateUserEntity);
    expect(user.isRight()).toBeTruthy();
    const raw = (user.value as UserEntity).export();
    expect(fakeUserRepositorySave).toHaveBeenCalledWith({
      ...raw,
      password: "fakeHashedPassword",
      id: "fakeGeneratedId",
    });
  });

  it("Should call bcrypt adapter with correct values", async () => {
    await useCase.execute(fakeInputCreateUserEntity);
    expect(fakeHash).toHaveBeenCalledWith(fakeInputCreateUserEntity.password);
  });
});
