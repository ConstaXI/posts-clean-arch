import { IsUUID } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";

export type InputDeletePostController = {
  id: string;
};

export default class DeletePostValidator extends AbstractSerializer<InputDeletePostController> {
  constructor(data: InputDeletePostController) {
    super(data);
    Object.assign(this, data);
  }

  @IsUUID()
  id: string;
}
