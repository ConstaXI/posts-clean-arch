import { IDecrypter } from "../../../src/business/protocols/criptography/IDecrypt";
import { IGenerateToken } from "../../../src/business/protocols/criptography/IGenerateToken";

export default class FakeJwt implements IGenerateToken, IDecrypter {
  async generate(_value: string): Promise<string> {
    return "fakeGeneratedToken";
  }

  async decrypt(_token: string): Promise<string> {
    return "fakeDecryptedId";
  }
}

export const fakeJwtDecrypt = jest.spyOn(FakeJwt.prototype, "decrypt");
