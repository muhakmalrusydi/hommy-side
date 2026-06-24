import { Input, PasswordInput, Button, Checkbox } from "@/shared/components/ui";
import { AuthErrorAlert } from "@/features/auth/components";
import { useLoginForm } from "@/features/auth/hooks/useLoginForm";
import { User, Key } from "lucide-react";

export function LoginForm() {
  const {
    register,

    errors,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    error,

    onSubmit,
  } = useLoginForm();

  return (
    <section
      className="
        flex
        items-center
        justify-center
        p-10
        md:p-14
      "
    >
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Selamat Datang Kembali
        </h2>

        <p className="mt-2 text-slate-500">
          Silakan masuk untuk melanjutkan ke dashboard.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan alamat email"
            icon={<User size={16} />}
            error={touchedFields.email ? errors.email?.message : undefined}
            {...register("email")}
          />

          <PasswordInput
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
            icon={<Key size={16} />}
            error={
              touchedFields.password ? errors.password?.message : undefined
            }
            {...register("password")}
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Simpan Kata Sandi" {...register("rememberMe")} />

            <button
              type="button"
              className="
                text-sm
                font-medium
                text-blue-600
                transition
                hover:text-blue-700
              "
            >
              Lupa Kata Sandi?
            </button>
          </div>

          <Button
            type="submit"
            loading={isSubmitting}
            disabled={!isDirty || !isValid}
          >
            Masuk
          </Button>
          <AuthErrorAlert message={error} />
        </form>
      </div>
    </section>
  );
}
