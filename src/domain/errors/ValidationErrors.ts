import Err from "../../shared/IError";

export default class ValidationErrors extends Err {
  static validationError(details: unknown): ValidationErrors {
    return new ValidationErrors({
      statusCode: 400,
      body: {
        message: "Validation failed",
        details,
      },
    });
  }
}
