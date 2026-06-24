import { AuthError } from "@/features/auth/errors/auth.error";
import { AUTH_ERROR_CODES } from "@/features/auth/errors/auth-error.codes";
import type { LoginFormData } from "../types/auth.types";

export async function login(data: LoginFormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (data.email === "owner@gmail.com" && data.password === "owner123") {
    return {
      success: true,
      user: {
        id: "1",
        name: "Owner",
        role: "owner",
      },
    };
  }

  throw new AuthError(AUTH_ERROR_CODES.INVALID_CREDENTIALS);
}
