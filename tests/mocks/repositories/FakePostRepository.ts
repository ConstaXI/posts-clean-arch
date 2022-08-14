import ISavePost from "../../../src/business/protocols/db/repositories/post/ISavePost";
import {
  InputSavePost,
  OutputSavePost,
} from "../../../src/business/dto/repositories/post/save";
import IFindPostBy from "../../../src/business/protocols/db/repositories/post/IFindPostBy";
import { makeFakePostEntity } from "../../fakes/post/PostEntity";
import {
  InputFindPostBy,
  OutputFindPostBy,
} from "../../../src/business/dto/repositories/post/findBy";
import IFindAllPosts from "../../../src/business/protocols/db/repositories/post/IFindAllPosts";
import {
  InputFindAll,
  OutputFindAll,
} from "../../../src/business/dto/repositories/post/findAll";
import IDeletePost from "../../../src/business/protocols/db/repositories/post/IDeletePost";
import {
  InputDeletePost,
  OutputDeletePost,
} from "../../../src/business/dto/repositories/post/delete";

export default class FakePostRepository
  implements ISavePost, IFindPostBy, IFindAllPosts, IDeletePost
{
  save(_post: InputSavePost): Promise<OutputSavePost> {
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

  delete(_input: InputDeletePost): Promise<OutputDeletePost> {
    return Promise.resolve();
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

export const fakePostRepositoryDelete = jest.spyOn(
  FakePostRepository.prototype,
  "delete"
);
