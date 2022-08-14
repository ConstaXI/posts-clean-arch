import { User, UserEntity } from "../../../../domain/entities/User";
import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";

export type InputFindUserByEmailUseCase = Pick<User, "email">;

export type OutputFindUserByEmailUseCase = Either<Err, UserEntity>;
