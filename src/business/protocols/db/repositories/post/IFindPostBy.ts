import {
  InputFindPostBy,
  OutputFindPostBy,
} from "../../../../dto/repositories/post/findBy";

export default interface IFindPostBy {
  findBy(target: InputFindPostBy): Promise<OutputFindPostBy>;
}
