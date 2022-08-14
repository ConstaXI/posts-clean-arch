import { Post } from "../../../../domain/entities/Post";
import { Paginated } from "../../../../domain/entities/utils/paginated";

export type InputFindAll = {
  limit: number;
  page: number;
};

export type OutputFindAll = Paginated<Post>;
