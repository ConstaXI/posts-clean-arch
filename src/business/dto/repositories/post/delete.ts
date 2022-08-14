import { Post } from "../../../../domain/entities/Post";

export type InputDeletePost = Pick<Post, "id">;

export type OutputDeletePost = void;
