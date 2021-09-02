export class RestError extends Error {
  status: number;
  code: string;
  cause: Error;
  
  constructor(status: number, code: string, message: string, error: Error) {
    super(message);
    this.code = code;
    this.status = status;
    this.cause = error;
  }
}