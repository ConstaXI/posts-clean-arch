import { IHasher } from "../../../src/business/protocols/criptography/IHasher";
import { IHashCompare } from "../../../src/business/protocols/criptography/IHashCompare";

export default class FakeBcrypt implements IHasher, IHashCompare {
  async hash(_value: string): Promise<string> {
    return "fakeHashedPassword";
  }

  async compare(_value: string, _hash: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

export const fakeHash = jest.spyOn(FakeBcrypt.prototype, "hash");
export const fakeCompare = jest.spyOn(FakeBcrypt.prototype, "compare");
