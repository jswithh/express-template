import * as v from "valibot";
import { isEmailExist } from "./utils/is-email-exist";

export class UserValidation {
  static readonly createUser = v.objectAsync({
    name: v.pipe(
        v.string("Name must be a string."),
        v.nonEmpty("Please enter your name.")
    ),
    email: v.pipeAsync(
        v.customAsync(isEmailExist, "The email address is already in use."),
        v.string("Email must be a string."),
        v.nonEmpty("Please enter your email."),
        v.email("Please enter a valid email."),
    ),
    password: v.pipe(
        v.string("Password must be a string."),
        v.nonEmpty("Please enter your password."),
        v.minLength(8, "Password must be at least 8 characters long.")
        )
  });
}
