import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeCreatePostController from "../factories/controllers/makeCreatePostController";
import makeFindPostByIdController from "../factories/controllers/makeFindPostByIdController";

export default (router: Router): void => {
  router.post("/posts", adaptRoute(makeCreatePostController()));
  router.get("/posts/:id", adaptRoute(makeFindPostByIdController()));
};
