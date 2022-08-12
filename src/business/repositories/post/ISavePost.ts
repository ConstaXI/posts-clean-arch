import {
  InputSavePostRepository,
  OutputSavePostRepository,
} from "../../dto/repositories/post/save";

export default interface ISavePost {
  save(post: InputSavePostRepository): Promise<OutputSavePostRepository>;
}
