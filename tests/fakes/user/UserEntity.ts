import {
  InputCreateUserEntity,
  UserEntity,
} from "../../../src/domain/entities/User";
import { InputFindUserByEmailUseCase } from "../../../src/business/dto/useCases/user/findByEmail";

export const fakeInputCreateUserEntity: InputCreateUserEntity = {
  email: "fake@email.com",
  password: "ultraSafePassword",
};

export const fakeInputFindUserByEmail: InputFindUserByEmailUseCase = {
  email: "fake@email.com",
};

export const makeFakeUserEntity = (props?: Partial<InputCreateUserEntity>) => {
  return UserEntity.create({
    ...fakeInputCreateUserEntity,
    ...props,
  }).value;
};
