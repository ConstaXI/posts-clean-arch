import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";
import {
  InputCreatePostEntity,
  PostEntity,
} from "../../../../domain/entities/Post";

export type InputCreatePostUseCase = InputCreatePostEntity;

export type OutputCreatePostUseCase = Either<Err, PostEntity>;
