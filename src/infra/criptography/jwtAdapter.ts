import jwt from "jsonwebtoken";
import { IDecrypter } from "../../business/protocols/criptography/IDecrypt";
import { IGenerateToken } from "../../business/protocols/criptography/IGenerateToken";

export default class JwtAdapter implements IGenerateToken, IDecrypter {
  constructor(private readonly secret: string) {}

  async generate(value: string): Promise<string> {
    return jwt.sign({ id: value }, this.secret);
  }

  async decrypt(token: string): Promise<string> {
    return jwt.verify(token, this.secret) as string;
  }
}
