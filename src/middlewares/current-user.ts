import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare module "http" {
  interface IncomingHttpHeaders {
    "tmis-token"?: string;
  }
}
interface User {
  id: string;
  email: string;
}
interface UserPayload {
  data: User;
}

declare global {
  namespace Express {
    interface Request {
      userData: User;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["tmis-token"]) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.headers["tmis-token"],
      "owt125"
    ) as UserPayload;

    req.userData = payload.data;
  } catch (error) {}
  next();
};
