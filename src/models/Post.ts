import AbstractEntity from "./AbstractEntity";
import { right, Right } from "../shared/either";

export type Post = {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type InputCreatePostEntity = Omit<Post, "createdAt" | "updatedAt">;
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
