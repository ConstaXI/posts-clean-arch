import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";
import { PostEntity } from "../../../../domain/entities/Post";

export type InputFindPostByIdUseCase = {
  id: string;
};

export type OutputFindPostByIdUseCase = Either<Err, PostEntity>;
