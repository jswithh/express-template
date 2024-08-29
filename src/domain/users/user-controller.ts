import { NextFunction, Request, Response } from "express";
import { UserService } from "./user-service";

export class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UserService.create(req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}
