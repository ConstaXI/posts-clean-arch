import { Either } from "../../../../shared/Either";
import { Paginated } from "../../../../domain/entities/utils/paginated";
import { Post } from "../../../../domain/entities/Post";
import Err from "../../../../shared/Err";

export type InputFindAllPostsUseCase = {
  limit: number;
  page: number;
};

export type OutputFindAllPostsUseCase = Either<Err, Paginated<Post>>;
