import { PostEntity } from "../../../src/domain/entities/Post";
import {
  fakeInputCreatePostEntity,
  fakeInputUpdatePostEntity,
  makeFakePostEntity,
} from "../../fakes/post/PostEntity";

describe("PostEntity", () => {
  describe("create", () => {
    it("Should be able to create a Post and set dates", () => {
      const post = PostEntity.create(fakeInputCreatePostEntity);
      expect(post.value.export().createdAt).toBeDefined();
      expect(post.value.export().updatedAt).toBeDefined();
    });
  });

  describe("update", () => {
    it("Should be able to update a Post and change updatedAt", () => {
      const post = makeFakePostEntity();
      const updatedPost = PostEntity.update({
        ...post,
        ...fakeInputUpdatePostEntity,
      });
      expect(updatedPost.value.export().description).toBe(
        fakeInputUpdatePostEntity.description
      );
      expect(updatedPost.value.export().updatedAt).not.toBe(
        post.export().updatedAt
      );
    });
  });
});
