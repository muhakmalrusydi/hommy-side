import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "@/features/auth/services/auth.service";
import { setAuthSession } from "@/features/auth/utils/auth.storage";

import { AuthError } from "@/features/auth/errors/auth.error";
import { mapAuthError } from "@/features/auth/errors/auth-error.mapper";

import type { LoginFormData } from "@/features/auth/types/auth.types";

export function useLogin() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  async function handleLogin(data: LoginFormData) {
    try {
      setError("");

      const response = await login(data);

      setAuthSession(response.user);

      navigate("/owner");
    } catch (err) {
      if (err instanceof AuthError) {
        setError(mapAuthError(err.code));

        return;
      }

      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
  }

  return {
    error,
    handleLogin,
  };
}
