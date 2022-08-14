import { IsNumber, IsPositive, Max } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";

export type InputFindAllPostsController = {
  page: string;
  limit: string;
};

export default class FindAllPostsValidator extends AbstractSerializer<InputFindAllPostsController> {
  constructor(data: InputFindAllPostsController) {
    super(data);
    this.page = +data.page;
    this.limit = +data.limit;
  }

  @IsNumber()
  @Max(20)
  @IsPositive()
  limit: number;

  @IsNumber()
  page: number;
}
