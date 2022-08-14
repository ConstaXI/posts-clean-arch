import ISavePost from "../../business/repositories/post/ISavePost";
import {
  InputSavePostRepository,
  OutputSavePostRepository,
} from "../../business/dto/repositories/post/save";
import MongoHelper from "../mongodb/MongoHelper";
import IFindPostBy from "../../business/repositories/post/IFindPostBy";
import {
  InputFindPostBy,
  OutputFindPostBy,
} from "../../business/dto/repositories/post/findBy";
import { Post, PostEntity } from "../../domain/entities/Post";

export default class PostRepository implements ISavePost, IFindPostBy {
  async save(post: InputSavePostRepository): Promise<OutputSavePostRepository> {
    const collection = await MongoHelper.getCollection("post");

    await collection.updateOne(
      { id: post.id },
      { $set: post },
      { upsert: true }
    );
  }

  async findBy(target: InputFindPostBy): Promise<OutputFindPostBy> {
    const collection = await MongoHelper.getCollection("post");

    const post = await collection.findOne<Post>(target);

    return post ? new PostEntity(post) : null;
  }
}
