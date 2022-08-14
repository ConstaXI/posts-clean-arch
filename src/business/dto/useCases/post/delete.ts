import { InputDeletePost } from "../../repositories/post/delete";
import { Either } from "../../../../shared/Either";
import Err from "../../../../shared/Err";

export type InputDeletePostUseCase = InputDeletePost;

export type OutputDeletePostUseCase = Either<Err, void>;
