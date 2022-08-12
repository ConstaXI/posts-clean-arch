interface ErrBody {
  code: string;
  message: string;
  shortMessage: string;
  [index: string]: unknown;
}

export default class Err {
  statusCode: number;

  body: ErrBody;

  constructor({ statusCode, body }: { statusCode: number; body: ErrBody }) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
