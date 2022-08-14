import {
  InputFindAll,
  OutputFindAll,
} from "../../../../dto/repositories/post/findAll";

export default interface IFindAllPosts {
  findAll(options: InputFindAll): Promise<OutputFindAll>;
}
