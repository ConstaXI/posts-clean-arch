import {
  InputSaveUser,
  OutputSaveUser,
} from "../../../../dto/repositories/user/save";

export default interface ISaveUser {
  save(user: InputSaveUser): Promise<OutputSaveUser>;
}
