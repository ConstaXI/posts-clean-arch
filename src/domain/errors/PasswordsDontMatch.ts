import Err from "../../shared/Err";

export default function passwordsDontMatch(): Err {
  return new Err({
    statusCode: 400,
    body: {
      message: "password and password confirmation didn't match",
    },
  });
}
