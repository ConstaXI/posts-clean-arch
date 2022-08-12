import { ObjectId } from "mongodb";
import { IGenerateObjectId } from "../../business/services/IGenerateObjectId";

export default class GenerateObjectId implements IGenerateObjectId {
  generate(): string {
    return new ObjectId().toString();
  }
}
