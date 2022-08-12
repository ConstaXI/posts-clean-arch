import Err from "../../shared/IError";

export default class DatabaseErrors extends Err {
  static failedToSave(e: unknown): DatabaseErrors {
    return new DatabaseErrors({
      statusCode: 500,
      body: {
        message: "Server found an error while saving entity in database",
        runtimeErr: e,
      },
    });
  }

  static failedToConnect(e: unknown): DatabaseErrors {
    return new DatabaseErrors({
      statusCode: 500,
      body: {
        message: "Server found an error while connecting to database",
        runtimeErr: e,
      },
    });
  }
}
