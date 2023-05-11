import { CustomError } from "./custom-error";

export class FileUploadError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, FileUploadError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
