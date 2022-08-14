import { IsUUID } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";

export type InputFindPostByIdController = {
  id: string;
};

export default class FindPostByIdValidator extends AbstractSerializer<InputFindPostByIdController> {
  constructor(data: InputFindPostByIdController) {
    super(data);
    Object.assign(this, data);
  }

  @IsUUID()
  id: string;
}
