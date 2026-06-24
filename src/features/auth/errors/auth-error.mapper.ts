import type { AuthErrorCode } from "./auth-error.codes";

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  AUTH_INVALID_CREDENTIALS: "Email atau kata sandi salah",

  AUTH_USER_NOT_FOUND: "Akun tidak ditemukan",

  AUTH_ACCOUNT_LOCKED: "Akun sedang dikunci",

  AUTH_EMAIL_NOT_VERIFIED: "Email belum diverifikasi",

  AUTH_NETWORK_ERROR: "Tidak dapat terhubung ke server",
};
export function mapAuthError(code: AuthErrorCode) {
  return AUTH_ERROR_MESSAGES[code];
}
