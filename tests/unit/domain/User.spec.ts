import { UserEntity } from "../../../src/domain/entities/User";
import { fakeInputCreateUserEntity } from "../../fakes/user/UserEntity";

describe("PostEntity", () => {
  describe("create", () => {
    it("Should be able to create a Post and set dates", () => {
      const user = UserEntity.create(fakeInputCreateUserEntity);
      expect(user.value.export().createdAt).toBeDefined();
      expect(user.value.export().updatedAt).toBeDefined();
    });
  });
});
