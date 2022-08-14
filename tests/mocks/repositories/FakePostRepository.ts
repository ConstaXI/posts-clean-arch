import ISavePost from "../../../src/business/repositories/post/ISavePost";
import {
  InputSavePostRepository,
  OutputSavePostRepository,
} from "../../../src/business/dto/repositories/post/save";
import IFindPostBy from "../../../src/business/repositories/post/IFindPostBy";
import { makeFakePostEntity } from "../../fakes/post/PostEntity";
import {
  InputFindPostBy,
  OutputFindPostBy,
} from "../../../src/business/dto/repositories/post/findBy";

export default class FakePostRepository implements ISavePost, IFindPostBy {
  save(_post: InputSavePostRepository): Promise<OutputSavePostRepository> {
    return Promise.resolve();
  }

  findBy(_target: InputFindPostBy): Promise<OutputFindPostBy> {
    return Promise.resolve(makeFakePostEntity());
  }
}

export const fakePostRepositorySave = jest.spyOn(
  FakePostRepository.prototype,
  "save"
);

export const fakePostRepositoryFindBy = jest.spyOn(
  FakePostRepository.prototype,
  "findBy"
);
