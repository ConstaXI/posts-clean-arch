import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeCreateUserController from "../factories/controllers/user/makeCreateUserController";

export default (router: Router): void => {
  router.post("/users", adaptRoute(makeCreateUserController()));
};
