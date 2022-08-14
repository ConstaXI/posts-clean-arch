import AbstractEntity from "./AbstractEntity";
import { right, Right } from "../../shared/Either";
import { Timestamp } from "./utils/timestamp";
import { Post } from "./Post";

export type UserRelations = {
  posts?: Post[];
};

export type User = {
  id?: string;
  email: string;
  password: string;
} & Timestamp &
  UserRelations;

export type InputCreateUserEntity = Pick<User, "email" | "password">;

export class UserEntity extends AbstractEntity<User> {
  static create(props: InputCreateUserEntity): Right<void, UserEntity> {
    const currentDate = new Date();

    const user = new UserEntity({
      ...props,
      id: undefined,
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    return right(user);
  }
}
