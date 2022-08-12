import {
  InputCreatePostEntity,
  InputUpdatePostEntity,
  PostEntity,
} from "../../../../src/models/Post";

export const fakeInputCreatePostEntity: InputCreatePostEntity = {
  title: "Fake Title",
  description: "Fake description",
};

export const fakeInputUpdatePostEntity: InputUpdatePostEntity = {
  description: "Updated fake description",
};

export const makeFakePostEntity = (props?: Partial<InputCreatePostEntity>) => {
  return PostEntity.create({ ...fakeInputCreatePostEntity, ...props });
};
