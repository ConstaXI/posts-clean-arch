import Err from "../../shared/Err";

export default function emailAlreadyExists(): Err {
  return new Err({
    statusCode: 400,
    body: {
      message: "email already exists",
    },
  });
}
