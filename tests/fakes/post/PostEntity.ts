import {
  InputCreatePostEntity,
  InputUpdatePostEntity,
  PostEntity,
} from "../../../src/domain/entities/Post";
import { InputCreatePostUseCase } from "../../../src/business/dto/useCases/post/create";

export const fakeInputCreatePostEntity: InputCreatePostEntity = {
  title: "Fake Title",
  description: "Fake description",
  tags: ["coolPost", "awesome", "yo"],
};

export const fakeInputUpdatePostEntity: InputUpdatePostEntity = {
  description: "Updated fake description",
};

export const fakeInputCreatePostUseCase: InputCreatePostUseCase = {
  ...fakeInputCreatePostEntity,
};

export const fakeInputCreatePostController = {
  ...fakeInputCreatePostEntity,
};

export const makeFakePostEntity = (props?: Partial<InputCreatePostEntity>) => {
  return PostEntity.create({ ...fakeInputCreatePostEntity, ...props });
};
