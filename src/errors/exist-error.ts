import { CustomError } from "./custom-error";

export class ExistError extends CustomError {
  statusCode = 409;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, ExistError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
