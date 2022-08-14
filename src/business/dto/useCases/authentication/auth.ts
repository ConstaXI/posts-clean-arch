import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";

export type InputAuthentication = {
  email: string;
  password: string;
};

export type OutputAuthentication = Either<Err, string>;
