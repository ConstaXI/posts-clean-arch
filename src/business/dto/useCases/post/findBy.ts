import { Either } from "../../../../shared/either";
import Err from "../../../../shared/IError";
import { PostEntity } from "../../../../domain/entities/Post";

export type InputFindPostByIdUseCase = {
  id: string;
};

export type OutputFindPostByIdUseCase = Either<Err, PostEntity>;
