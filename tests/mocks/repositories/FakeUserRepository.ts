import {
  InputSaveUser,
  OutputSaveUser,
} from "../../../src/business/dto/repositories/user/save";
import {
  InputFindUserBy,
  OutputFindUserBy,
} from "../../../src/business/dto/repositories/user/findBy";
import { makeFakeUserEntity } from "../../fakes/user/UserEntity";
import ISaveUser from "../../../src/business/protocols/db/repositories/user/ISaveUser";
import IFindUserBy from "../../../src/business/protocols/db/repositories/user/IFindUserBy";

export default class FakeUserRepository implements ISaveUser, IFindUserBy {
  save(_user: InputSaveUser): Promise<OutputSaveUser> {
    return Promise.resolve();
  }

  findBy(_target: InputFindUserBy): Promise<OutputFindUserBy> {
    return Promise.resolve(makeFakeUserEntity());
  }
}

export const fakeUserRepositorySave = jest.spyOn(
  FakeUserRepository.prototype,
  "save"
);

export const fakeUserRepositoryFindBy = jest.spyOn(
  FakeUserRepository.prototype,
  "findBy"
);
