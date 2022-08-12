import { IUseCase } from "../IUseCase";
import {
  InputCreatePostUseCase,
  OutputCreatePostUseCase,
} from "../../dto/useCases/post/create";
import ISavePost from "../../repositories/post/ISavePost";
import { PostEntity } from "../../../domain/entities/Post";
import { left, right } from "../../../shared/either";
import { IGenerateObjectId } from "../../services/IGenerateObjectId";

export default class CreatePostUseCase
  implements IUseCase<InputCreatePostUseCase, OutputCreatePostUseCase>
{
  constructor(
    private generateObjectId: IGenerateObjectId,
    private postRepository: ISavePost
  ) {}

  async execute(
    props: InputCreatePostUseCase
  ): Promise<OutputCreatePostUseCase> {
    const post = PostEntity.create(props);

    const isErr = await this.postRepository.save({
      ...post.value.export(),
      _id: this.generateObjectId.generate(),
    });

    if (isErr.isLeft()) {
      return left(isErr.value);
    }

    return right(post.value);
  }
}
