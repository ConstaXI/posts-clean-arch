import ISavePost from "../../business/repositories/post/ISavePost";
import {
  InputSavePostRepository,
  OutputSavePostRepository,
} from "../../business/dto/repositories/post/save";
import { left, right } from "../../shared/either";
import DatabaseErrors from "../../domain/errors/DatabaseErrors";
import MongoHelper from "../mongodb/MongoHelper";

export default class PostRepository implements ISavePost {
  async save(post: InputSavePostRepository): Promise<OutputSavePostRepository> {
    const collection = await MongoHelper.getCollection("post");

    try {
      await collection.updateOne(
        { _id: post._id },
        { $set: post },
        { upsert: true }
      );

      return right(undefined);
    } catch (e) {
      return left(DatabaseErrors.failedToSave(e));
    }
  }
}
