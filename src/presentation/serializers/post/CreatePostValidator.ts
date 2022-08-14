import { IsArray, IsNotEmpty } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";
import { InputCreatePostUseCase } from "../../../business/dto/useCases/post/create";

export default class CreatePostValidator extends AbstractSerializer<InputCreatePostUseCase> {
  constructor(data: InputCreatePostUseCase) {
    super(data);
    Object.assign(this, data);
  }

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  @IsArray()
  tags: string[];
}
