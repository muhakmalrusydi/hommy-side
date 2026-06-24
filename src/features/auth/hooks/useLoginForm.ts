import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/features/auth/schemas/login.schema";
import type { LoginFormData } from "@/features/auth/types/auth.types";

import { useLogin } from "./useLogin";

export function useLoginForm() {
  const { handleLogin, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return {
    register,
    errors,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    error,
    onSubmit: handleSubmit(handleLogin),
  };
}
