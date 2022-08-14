import { Request, Response } from "express";
import AbstractController from "../../../presentation/controllers/AbstractController";
import { Either } from "../../../shared/Either";
import Err from "../../../shared/Err";
import serverError from "../../../domain/errors/serverError";

const adaptRoute = (
  controller: AbstractController<unknown, Either<Err, unknown>>
) => {
  return async (req: Request, res: Response) => {
    try {
      const request = {
        ...(req.body || {}),
        ...(req.params || {}),
        ...(req.query || {}),
      };

      const result = await controller.handle(request);

      if (result.isLeft()) {
        res.status(result.value.statusCode).json(result.value.body);
      } else {
        const status = result.value ? 200 : 204;

        res.status(status).json(result.value);
      }
    } catch (e) {
      const error = serverError(e);

      res.status(error.statusCode).json(error.body);
    }
  };
};

export default adaptRoute;
