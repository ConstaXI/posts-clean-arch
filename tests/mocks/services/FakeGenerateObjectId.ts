import { IGenerateUuid } from "../../../src/business/services/IGenerateUuid";

export default class FakeGenerateObjectId implements IGenerateUuid {
  generate(): string {
    return "fakeGeneratedId";
  }
}

export const fakeGenerateObjectId = jest.spyOn(
  FakeGenerateObjectId.prototype,
  "generate"
);
