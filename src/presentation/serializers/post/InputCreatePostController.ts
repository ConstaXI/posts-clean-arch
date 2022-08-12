import AbstractSerializer from "../AbstractSerializer";
import { InputCreatePostUseCase } from "../../../business/dto/useCases/post/create";

export default class InputCreatePostController extends AbstractSerializer<InputCreatePostUseCase> {
  constructor(data: InputCreatePostUseCase) {
    super(data);
  }

  title: string;

  description: string;
}
