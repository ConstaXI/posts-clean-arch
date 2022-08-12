import { Either } from "../../../../shared/either";
import Err from "../../../../shared/IError";
import {
  InputCreatePostEntity,
  PostEntity,
} from "../../../../domain/entities/Post";

export type InputCreatePostUseCase = InputCreatePostEntity;

export type OutputCreatePostUseCase = Either<Err, PostEntity>;
