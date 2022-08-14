import { User, UserEntity } from "../../../../domain/entities/User";

export type InputFindUserBy = Partial<{
  [K in keyof User]: User[K];
}>;

export type OutputFindUserBy = UserEntity | null;
