import ISaveUser from "../../business/protocols/db/repositories/user/ISaveUser";
import IFindUserBy from "../../business/protocols/db/repositories/user/IFindUserBy";
import MongoHelper from "../mongodb/MongoHelper";
import {
  InputFindUserBy,
  OutputFindUserBy,
} from "../../business/dto/repositories/user/findBy";
import {
  InputSaveUser,
  OutputSaveUser,
} from "../../business/dto/repositories/user/save";
import { User, UserEntity } from "../../domain/entities/User";

export default class UserRepository implements ISaveUser, IFindUserBy {
  async findBy(target: InputFindUserBy): Promise<OutputFindUserBy> {
    const collection = await MongoHelper.getCollection("user");

    const user = await collection.findOne<User>(target);

    return user ? new UserEntity(user) : null;
  }

  async save(user: InputSaveUser): Promise<OutputSaveUser> {
    const collection = await MongoHelper.getCollection("user");

    await collection.updateOne(
      { id: user.id },
      { $set: user },
      { upsert: true }
    );
  }
}
