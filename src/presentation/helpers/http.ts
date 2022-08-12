import { HttpResponse } from "../protocols/http";

export const ok = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse<null> => ({
  statusCode: 204,
  body: null,
});
