import {
  InputDeletePost,
  OutputDeletePost,
} from "../../dto/repositories/post/delete";

export default interface IDeletePost {
  delete(input: InputDeletePost): Promise<OutputDeletePost>;
}
