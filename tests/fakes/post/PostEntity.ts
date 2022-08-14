import {
  InputCreatePostEntity,
  InputUpdatePostEntity,
  PostEntity,
} from "../../../src/domain/entities/Post";
import { InputCreatePostUseCase } from "../../../src/business/dto/useCases/post/create";
import { InputFindPostByIdUseCase } from "../../../src/business/dto/useCases/post/findBy";
import { InputFindPostByIdController } from "../../../src/presentation/serializers/post/FindPostByIdValidator";

export const fakeInputCreatePostEntity: InputCreatePostEntity = {
  title: "Fake Title",
  body: "Fake description",
  tags: ["coolPost", "awesome", "yo"],
};

export const fakeInputUpdatePostEntity: InputUpdatePostEntity = {
  body: "Updated fake description",
};

export const fakeInputCreatePostUseCase: InputCreatePostUseCase = {
  ...fakeInputCreatePostEntity,
};

export const fakeInputFindPostByIdUseCase: InputFindPostByIdUseCase = {
  id: "fakeId",
};

export const fakeInputFindPostByIdController: InputFindPostByIdController = {
  id: "1f7efdbc-4e47-4f97-9402-72b2af7a2ae5",
};

export const fakeInputCreatePostController = {
  ...fakeInputCreatePostEntity,
};

export const makeFakePostEntity = (props?: Partial<InputCreatePostEntity>) => {
  return PostEntity.create({
    ...fakeInputCreatePostEntity,
    ...props,
  }).value;
};
