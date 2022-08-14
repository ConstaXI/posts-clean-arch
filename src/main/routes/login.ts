import { Router } from "express";
import adaptRoute from "../adapters/express/expressRouteAdapter";
import makeLoginController from "../factories/controllers/login/makeLoginController";

export default (router: Router): void => {
  router.post("/login", adaptRoute(makeLoginController()));
};
