import { IGenerateObjectId } from "../../../src/business/services/IGenerateObjectId";

export default class FakeGenerateObjectId implements IGenerateObjectId {
  generate(): string {
    return "fakeGeneratedId";
  }
}

export const fakeGenerateObjectId = jest.spyOn(
  FakeGenerateObjectId.prototype,
  "generate"
);
