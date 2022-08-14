import { IDecrypter } from "../../business/protocols/criptography/IDecrypt";
import { Either, left, right } from "../../shared/Either";
import unauthorized from "../../domain/errors/unauthorized";
import AbstractController from "../controllers/AbstractController";
import Err from "../../shared/Err";
import forbidden from "../../domain/errors/forbidden";

export type AuthRequest = {
  token?: string;
};

export type AuthResponse = Either<Err, { userId: string }>;

export class AuthMiddleware extends AbstractController<
  AuthRequest,
  AuthResponse
> {
  constructor(private readonly tokenDecrypter: IDecrypter) {
    super();
  }

  async handle(request: AuthRequest): Promise<AuthResponse> {
    try {
      if (!request.token) {
        return left(unauthorized());
      }

      const id = await this.tokenDecrypter.decrypt(request.token);

      return right({ userId: id });
    } catch {
      return left(forbidden());
    }
  }
}
