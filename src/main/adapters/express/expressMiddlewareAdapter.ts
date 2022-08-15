import { NextFunction, Request, Response } from "express";
import AbstractController from "../../../presentation/controllers/AbstractController";
import { Either, left } from "../../../shared/Either";
import Err from "../../../shared/Err";
import unauthorized from "../../../domain/errors/unauthorized";

const adaptMiddleware = (
  middleware: AbstractController<unknown, Either<Err, unknown>>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bearer = req.headers.authorization;

      if (!bearer) {
        const err = left(unauthorized());
        res.status(err.value.statusCode).json(err.value.body);
        return;
      }

      const token = (bearer as string).split(" ")[1];

      const request = {
        ...(req.headers || {}),
        token,
      };

      const httpResponse = await middleware.handle(request);

      if (httpResponse.isLeft()) {
        res.status(httpResponse.value.statusCode).json(httpResponse.value.body);
      } else {
        Object.assign(req, httpResponse.value);
        next();
      }
    } catch {
      const err = left(unauthorized());
      res.status(err.value.statusCode).json(err.value.body);
    }
  };
};

export default adaptMiddleware;
