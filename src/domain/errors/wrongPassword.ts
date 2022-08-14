import Err from "../../shared/Err";

export default function wrongPassword() {
  return new Err({
    statusCode: 400,
    body: {
      message: "Your password is wrong",
    },
  });
}
