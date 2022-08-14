import { IUseCase } from "../IUseCase";
import {
  InputCreatePostUseCase,
  OutputCreatePostUseCase,
} from "../../dto/useCases/post/create";
import ISavePost from "../../repositories/post/ISavePost";
import { PostEntity } from "../../../domain/entities/Post";
import { right } from "../../../shared/Either";
import { IGenerateUuid } from "../../services/IGenerateUuid";

export default class CreatePostUseCase
  implements IUseCase<InputCreatePostUseCase, OutputCreatePostUseCase>
{
  constructor(
    private generateObjectId: IGenerateUuid,
    private postRepository: ISavePost
  ) {}

  async execute(
    props: InputCreatePostUseCase
  ): Promise<OutputCreatePostUseCase> {
    const post = PostEntity.create(props);

    await this.postRepository.save({
      ...post.value.export(),
      id: this.generateObjectId.generate(),
    });

    return right(post.value);
  }
}
