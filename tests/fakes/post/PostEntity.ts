import {
  InputCreatePostEntity,
  InputUpdatePostEntity,
  PostEntity,
} from "../../../src/domain/entities/Post";
import { InputCreatePostUseCase } from "../../../src/business/dto/useCases/post/create";
import { InputFindPostByIdUseCase } from "../../../src/business/dto/useCases/post/findBy";
import { InputFindPostByIdController } from "../../../src/presentation/serializers/post/FindPostByIdValidator";
import { InputEditPostUseCase } from "../../../src/business/dto/useCases/post/edit";
import { InputDeletePostUseCase } from "../../../src/business/dto/useCases/post/delete";
import { InputFindAllPostsController } from "../../../src/presentation/serializers/post/FindAllPostsValidator";
import { InputFindAllPostsUseCase } from "../../../src/business/dto/useCases/post/findAll";
import { InputDeletePostController } from "../../../src/presentation/serializers/post/DeletePostValidator";

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

export const fakeInputEditPostUseCase: InputEditPostUseCase = {
  id: "1f7efdbc-4e47-4f97-9402-72b2af7a2ae5",
  title: "Updated Title",
};

export const fakeInputFindPostByIdUseCase: InputFindPostByIdUseCase = {
  id: "fakeId",
};

export const fakeInputDeletePostUseCase: InputDeletePostUseCase = {
  id: "fakeId",
};

export const fakeInputDeletePostController: InputDeletePostController = {
  id: "1f7efdbc-4e47-4f97-9402-72b2af7a2ae5",
};

export const fakeInputFindPostByIdController: InputFindPostByIdController = {
  id: "1f7efdbc-4e47-4f97-9402-72b2af7a2ae5",
};

export const fakeInputFindAllPostsController: InputFindAllPostsController = {
  limit: "10",
  page: "1",
};

export const fakeInputFindAllPostsUseCase: InputFindAllPostsUseCase = {
  limit: 10,
  page: 1,
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
