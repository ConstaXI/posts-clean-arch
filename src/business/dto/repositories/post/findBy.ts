import { Post, PostEntity } from "../../../../domain/entities/Post";

export type InputFindPostBy = Partial<{
  [K in keyof Post]: Post[K];
}>;

export type OutputFindPostBy = PostEntity | null;
