import Err from "../../shared/Err";

export default function serverError(e: unknown): Err {
  return new Err({
    statusCode: 500,
    body: {
      message: "Server found an unexpected error",
      runtimeErr: e,
    },
  });
}
