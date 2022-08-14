import AbstractEntity from "./AbstractEntity";
import { right, Right } from "../../shared/either";
import { Timestamp } from "./timestamp";

export type Post = {
  id?: string;
  title: string;
  body: string;
  tags: string[];
} & Timestamp;

export type InputCreatePostEntity = Pick<Post, "title" | "body" | "tags">;

export type InputUpdatePostEntity = Partial<InputCreatePostEntity>;

export class PostEntity extends AbstractEntity<Post> {
  static create(props: InputCreatePostEntity): Right<void, PostEntity> {
    const currentDate = new Date();

    const post = new PostEntity({
      ...props,
      id: undefined,
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    return right(post);
  }

  static update(props: InputUpdatePostEntity): Right<void, PostEntity> {
    const currentDate = new Date();

    const post = new PostEntity({
      ...props,
      updatedAt: currentDate,
    } as Post);

    return right(post);
  }
}
