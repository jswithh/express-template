import * as v from "valibot";

export class Validation {
  static validate<T>(schema: any, data: T): T {
    return v.parse(schema, data, { abortEarly: true });
  }

  static async validateAsync<T>(schema: any, data: T): Promise<T> {
    return await v.parseAsync(schema, data, { abortEarly: true });
  }
}
