import { Request, Response } from "express";
import AbstractController from "../../../presentation/controllers/AbstractController";
import { Either } from "../../../shared/either";
import Err from "../../../shared/IError";

const adaptRoute = (
  controller: AbstractController<unknown, Either<Err, unknown>>
) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };

    const result = await controller.handle(request);

    if (result.isLeft()) {
      res.status(result.value.statusCode).json(result.value.body);
    }

    const status = result.value ? 200 : 204;

    res.status(status).json(result.value);
  };
};

export default adaptRoute;
