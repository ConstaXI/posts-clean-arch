import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import AbstractSerializer from "../AbstractSerializer";
import { InputEditPostUseCase } from "../../../business/dto/useCases/post/edit";

export type InputEditPostController = InputEditPostUseCase;

export default class EditPostValidator extends AbstractSerializer<InputEditPostController> {
  constructor(data: InputEditPostController) {
    super(data);
    Object.assign(this, data);
  }

  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  body?: string;

  @IsOptional()
  @IsArray()
  tags?: string[];
}
