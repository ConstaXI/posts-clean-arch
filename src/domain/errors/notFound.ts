import Err from "../../shared/Err";

export default function notFound(): Err {
  return new Err({
    statusCode: 404,
    body: {
      message: "entity not found by the given conditions",
    },
  });
}
