import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeCreatePostController from "../factories/controllers/post/makeCreatePostController";
import makeFindPostByIdController from "../factories/controllers/post/makeFindPostByIdController";
import makeFindAllPostsController from "../factories/controllers/post/makeFindAllPostsController";
import makeEditPostController from "../factories/controllers/post/makeEditPostController";
import makeDeletePostController from "../factories/controllers/post/makeDeletePostController";
import adaptMiddleware from "../adapters/express/expressMiddlewareAdapter";
import makeAuthMiddleware from "../factories/controllers/middleware/makeAuthMiddleware";

export default (router: Router): void => {
  router.post(
    "/posts",
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeCreatePostController())
  );
  router.get("/posts/:id", adaptRoute(makeFindPostByIdController()));
  router.get("/posts", adaptRoute(makeFindAllPostsController()));
  router.put(
    "/posts/:id",
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeEditPostController())
  );
  router.delete(
    "/posts/:id",
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeDeletePostController())
  );
};
