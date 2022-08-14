import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeCreatePostController from "../factories/controllers/makeCreatePostController";
import makeFindPostByIdController from "../factories/controllers/makeFindPostByIdController";
import makeFindAllPostsController from "../factories/controllers/makeFindAllPostsController";
import makeEditPostController from "../factories/controllers/makeEditPostController";
import makeDeletePostController from "../factories/controllers/makeDeletePostController";

export default (router: Router): void => {
  router.post("/posts", adaptRoute(makeCreatePostController()));
  router.get("/posts/:id", adaptRoute(makeFindPostByIdController()));
  router.get("/posts", adaptRoute(makeFindAllPostsController()));
  router.put("/posts/:id", adaptRoute(makeEditPostController()));
  router.delete("/posts/:id", adaptRoute(makeDeletePostController()));
};
