import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";

export type InputLogin = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default class LoginValidator extends AbstractSerializer<InputLogin> {
  constructor(data: InputLogin) {
    super(data);
  }

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
