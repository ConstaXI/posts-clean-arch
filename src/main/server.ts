import env from "./config/env";
import MongoHelper from "../infra/mongodb/MongoHelper";

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import("./config/app")).default;

    app.listen(env.port, () =>
      console.info(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch((err) => console.error(err));
