import {
  InputCreateUserEntity,
  UserEntity,
} from "../../../../domain/entities/User";
import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";

export type InputCreateUserUseCase = InputCreateUserEntity;

export type OutputCreateUserUseCase = Either<Err, UserEntity>;
