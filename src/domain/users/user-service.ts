import { db } from "../../db/database";
import { ResponseError } from "../../utils/response-error";
import { Validation } from "../../utils/validation";
import { CreateUserRequest } from "./dtos/create-users";
import { users } from "./schema";
import { UserValidation } from "./user-validation";

export class UserService {
  static async create(
    request: CreateUserRequest
  ) {
    const registerRequest = await Validation.validateAsync(
      UserValidation.createUser,
      request
    );
    const [newUser] = await db.insert(users).values(registerRequest);
    if (newUser.insertId > 0) {
      return {
        message: "User registered",
      };
    }

    throw new ResponseError("User not registered", 500);
  }
}
