import {
  InputSavePost,
  OutputSavePost,
} from "../../../../dto/repositories/post/save";

export default interface ISavePost {
  save(post: InputSavePost): Promise<OutputSavePost>;
}
