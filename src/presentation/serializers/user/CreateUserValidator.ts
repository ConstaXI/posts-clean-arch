import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";

export type InputCreateUserController = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export default class CreateUserValidator extends AbstractSerializer<InputCreateUserController> {
  constructor(data: InputCreateUserController) {
    super(data);
  }

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  passwordConfirmation: string;
}
