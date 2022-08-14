import { IUseCase } from "../IUseCase";
import {
  InputEditPostUseCase,
  OutputEditPostUseCase,
} from "../../dto/useCases/post/edit";
import ISavePost from "../../protocols/db/repositories/post/ISavePost";
import { PostEntity } from "../../../domain/entities/Post";
import { right } from "../../../shared/Either";

export default class EditPostUseCase
  implements IUseCase<InputEditPostUseCase, OutputEditPostUseCase>
{
  constructor(private postRepository: ISavePost) {}

  async execute(props: InputEditPostUseCase): Promise<OutputEditPostUseCase> {
    const updatedPost = PostEntity.update(props);

    await this.postRepository.save(updatedPost.value.export());

    return right(updatedPost.value);
  }
}
