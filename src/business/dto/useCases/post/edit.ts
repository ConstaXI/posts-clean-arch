import {
  InputCreatePostEntity,
  PostEntity,
} from "../../../../domain/entities/Post";
import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";

export type InputEditPostUseCase = Partial<InputCreatePostEntity> & {
  id: string;
};

export type OutputEditPostUseCase = Either<Err, PostEntity>;
