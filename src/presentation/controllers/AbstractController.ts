import { Either } from "../../shared/Either";
import Err from "../../shared/Err";
import AbstractSerializer from "../serializers/AbstractSerializer";

export type ValidationError = {
  property: string;
  value: string;
  errors?: string[];
};

export default abstract class AbstractController<
  I,
  O extends Either<Err, unknown>
> {
  abstract handle(input: I, ...args: unknown[]): Promise<O>;

  protected validate(
    input: AbstractSerializer<I>
  ): ValidationError[] | undefined {
    const errors = input.validate();

    if (errors.length) {
      return errors.map((err) => ({
        property: err.property,
        value: `value <${err.value}> did not pass validation`,
        errors: err.constraints
          ? Object.entries(err.constraints).map(([, value]) => value)
          : undefined,
      }));
    }

    return undefined;
  }
}
