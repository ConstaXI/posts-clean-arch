import { IUseCase } from "../IUseCase";
import { right } from "../../../shared/Either";
import {
  InputDeletePostUseCase,
  OutputDeletePostUseCase,
} from "../../dto/useCases/post/delete";
import IDeletePost from "../../protocols/db/repositories/post/IDeletePost";

export default class DeletePostUseCase
  implements IUseCase<InputDeletePostUseCase, OutputDeletePostUseCase>
{
  constructor(private postRepository: IDeletePost) {}

  async execute(
    props: InputDeletePostUseCase
  ): Promise<OutputDeletePostUseCase> {
    await this.postRepository.delete({ id: props.id });

    return right(undefined);
  }
}
