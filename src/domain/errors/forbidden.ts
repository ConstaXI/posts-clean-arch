import Err from "../../shared/Err";

export default function forbidden(): Err {
  return new Err({
    statusCode: 403,
    body: {
      message: "You can't access this resource, check your request headers",
    },
  });
}
