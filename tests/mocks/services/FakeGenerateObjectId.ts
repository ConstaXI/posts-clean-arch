import { IGenerateUuid } from "../../../src/business/protocols/services/IGenerateUuid";

export default class FakeGenerateObjectId implements IGenerateUuid {
  generate(): string {
    return "fakeGeneratedId";
  }
}
