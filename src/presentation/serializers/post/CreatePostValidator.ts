import { IsArray, IsNotEmpty, IsString } from "class-validator";
import AbstractSerializer from "../AbstractSerializer";
import { InputCreatePostUseCase } from "../../../business/dto/useCases/post/create";

export default class CreatePostValidator extends AbstractSerializer<InputCreatePostUseCase> {
  constructor(data: InputCreatePostUseCase) {
    super(data);
    Object.assign(this, data);
  }

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsArray()
  tags: string[];
}
