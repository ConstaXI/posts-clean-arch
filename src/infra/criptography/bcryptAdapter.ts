import bcrypt from "bcrypt";
import { IHashCompare } from "../../business/protocols/criptography/IHashCompare";
import { IHasher } from "../../business/protocols/criptography/IHasher";

export default class BcryptAdapter implements IHasher, IHashCompare {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  async hash(value: string): Promise<string> {
    return bcrypt.hash(value, this.salt);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
