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
import IFindAllPosts from "../../business/repositories/post/IFindAllPosts";
import {
  InputFindAll,
  OutputFindAll,
} from "../../business/dto/repositories/post/findAll";

export default class PostRepository
  implements ISavePost, IFindPostBy, IFindAllPosts
{
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

  async findAll({ page, limit }: InputFindAll): Promise<OutputFindAll> {
    const collection = await MongoHelper.getCollection("post");

    const posts = await collection
      .find<Post>({})
      .skip(page)
      .limit(limit)
      .toArray();

    return {
      limit,
      page,
      results: posts,
    };
  }
}
