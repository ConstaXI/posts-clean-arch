import { Post } from "../../../../domain/entities/Post";
import { Either } from "../../../../shared/either";
import Err from "../../../../shared/IError";

export type InputSavePostRepository = Post;

export type OutputSavePostRepository = Either<Err, void>;
