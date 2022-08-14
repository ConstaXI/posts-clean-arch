import Err from "../../shared/Err";

export default function unauthorized() {
  return new Err({
    statusCode: 401,
    body: {
      message: "You must be logged in to have access",
    },
  });
}
