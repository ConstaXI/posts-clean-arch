import Err from "../../shared/Err";

export default function validationError(details: unknown): Err {
  return new Err({
    statusCode: 400,
    body: {
      message: "Validation failed",
      details,
    },
  });
}
