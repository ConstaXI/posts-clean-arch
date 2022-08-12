import ISavePost from "../../../src/business/repositories/post/ISavePost";
import {
  InputSavePostRepository,
  OutputSavePostRepository,
} from "../../../src/business/dto/repositories/post/save";
import { right } from "../../../src/shared/either";

export default class FakePostRepository implements ISavePost {
  save(_post: InputSavePostRepository): Promise<OutputSavePostRepository> {
    return Promise.resolve(right(undefined));
  }
}

export const fakePostRepositorySave = jest.spyOn(
  FakePostRepository.prototype,
  "save"
);
