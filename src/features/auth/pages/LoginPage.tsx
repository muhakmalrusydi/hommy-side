/* Komponen */
import { LoginForm, AuthBranding } from "@/features/auth/components";

export function LoginPage() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-200
        flex
        items-center
        justify-center
        px-6
        py-8
      "
    >
      <div
        className="
          w-full
          max-w-6xl
          min-h-170
          bg-white
          rounded-2xl
          shadow-xl
          overflow-hidden
          grid
          md:grid-cols-[55%_45%]
        "
      >
        <AuthBranding />
        <LoginForm />
      </div>
    </main>
  );
}
