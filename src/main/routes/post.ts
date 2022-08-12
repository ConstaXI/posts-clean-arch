import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeCreatePostController from "../factories/controllers/CreatePostController";

export default (router: Router): void => {
  router.post("/posts", adaptRoute(makeCreatePostController()));
};
