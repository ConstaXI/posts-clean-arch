import {
  InputFindUserBy,
  OutputFindUserBy,
} from "../../../../dto/repositories/user/findBy";

export default interface IFindUserBy {
  findBy(target: InputFindUserBy): Promise<OutputFindUserBy>;
}
