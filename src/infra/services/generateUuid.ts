import crypto from "crypto";
import { IGenerateUuid } from "../../business/protocols/services/IGenerateUuid";

export default class GenerateUuid implements IGenerateUuid {
  generate(): string {
    return crypto.randomUUID();
  }
}
