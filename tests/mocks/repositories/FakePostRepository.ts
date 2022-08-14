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
import IFindAllPosts from "../../../src/business/repositories/post/IFindAllPosts";
import {
  InputFindAll,
  OutputFindAll,
} from "../../../src/business/dto/repositories/post/findAll";

export default class FakePostRepository
  implements ISavePost, IFindPostBy, IFindAllPosts
{
  save(_post: InputSavePostRepository): Promise<OutputSavePostRepository> {
    return Promise.resolve();
  }

  findBy(_target: InputFindPostBy): Promise<OutputFindPostBy> {
    return Promise.resolve(makeFakePostEntity());
  }

  findAll(_options: InputFindAll): Promise<OutputFindAll> {
    return Promise.resolve({
      limit: 10,
      page: 1,
      results: [makeFakePostEntity().export()],
    });
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

export const fakePostRepositoryFindAll = jest.spyOn(
  FakePostRepository.prototype,
  "findAll"
);
