import type { AuthErrorCode } from "./auth-error.codes";

export class AuthError extends Error {
  code: AuthErrorCode;

  constructor(code: AuthErrorCode) {
    super(code);

    this.code = code;

    this.name = "AuthError";
  }
}
