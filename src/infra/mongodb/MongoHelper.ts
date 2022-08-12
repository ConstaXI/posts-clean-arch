import { Collection, MongoClient } from "mongodb";

class MongoHelper {
  client?: MongoClient;

  uri?: string;

  async connect(uri: string): Promise<MongoClient> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
    return this.client;
  }

  async disconnect(): Promise<void> {
    if (!this.client) throw new Error("Mongo was not connected");

    await this.client.close();
  }

  async getCollection(name: string): Promise<Collection> {
    if (!this.uri) {
      throw new Error("URI is undefined");
    }

    if (!this.client) {
      this.client = await this.connect(this.uri);
      return this.client.db().collection(name);
    }

    return this.client.db().collection(name);
  }
}

export default new MongoHelper();
