import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../utils/response-error";
import { ValiError } from "valibot";

export const errorMiddleware = async (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ResponseError) {
    return res.status(error.status).json({
      errors: error.message,
    });
  }

  if (error instanceof ValiError) {
    return res.status(400).json({
      errors: error.message,
    });
  }

  return res.status(500).json({
    errors: error.message,
  });
};
