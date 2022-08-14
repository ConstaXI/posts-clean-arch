import { IsEmail, IsString, MinLength } from "class-validator";
import AbstractController from "../../../src/presentation/controllers/AbstractController";
import AbstractSerializer from "../../../src/presentation/serializers/AbstractSerializer";
import { Either, left, right } from "../../../src/shared/either";
import Err from "../../../src/shared/IError";
import validationError from "../../../src/domain/errors/validationError";

describe("Abstract Operator", () => {
  type FakeInput = {
    name: string;
    email: string;
  };

  class FakeAbstractSerializer extends AbstractSerializer<FakeInput> {
    constructor(data: FakeInput) {
      super(data);
    }

    @IsString()
    @MinLength(5)
    name: string;

    @IsString()
    @IsEmail()
    email: string;
  }

  class FakeExtendedAbstractController extends AbstractController<
    FakeInput,
    Either<Err, void>
  > {
    async handle(i: FakeInput): Promise<Either<Err, void>> {
      const instance = new FakeAbstractSerializer(i);

      const errors = this.validate(instance);

      if (errors) {
        return left(validationError(errors));
      }

      return right(undefined);
    }
  }

  describe("validate", () => {
    test("Should return a formatted error", async () => {
      const serializer = {
        name: "Fake",
        email: "not.a.valid.email",
      };

      const error = await new FakeExtendedAbstractController().handle(
        serializer
      );

      const err = error.value as unknown as Err;

      expect(err.statusCode).toBe(400);
      expect(err.body.message).toBeDefined();
    });
  });
});
