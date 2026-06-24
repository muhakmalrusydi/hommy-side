import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
};

export function Button({
  children,
  loading = false,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      disabled={disabled || loading}
      className={`
        flex
        w-full
        items-center
        justify-center
        rounded-xl
        bg-linear-to-r
        from-blue-600
        to-indigo-600
        px-4
        py-3
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-200
        hover:scale-[1.02]
        hover:shadow-lg
        hover:from-blue-700
        hover:to-indigo-700
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {loading ? <span aria-live="polite">Memproses...</span> : children}
    </button>
  );
}
