import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: ReactNode;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    { id, label, error, icon, className = "", ...props },
    ref,
  ) {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <span
              className="
      pointer-events-none
      absolute
      left-3
      top-1/2
      -translate-y-1/2
      text-slate-400
    "
            >
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            {...props}
            type={showPassword ? "text" : "password"}
            aria-invalid={!!error}
            className={`
            w-full
            rounded-xl
            border
            border-slate-300
            bg-white
            py-3
            pr-12
            ${icon ? "pl-11" : "pl-4"}
            text-slate-900
            outline-none
            transition-all
            duration-200
            placeholder:text-slate-400
            hover:border-slate-400
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            ${error ? "border-red-500 focus:ring-red-100" : ""}
            ${className}
          `}
          />

          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((prev) => !prev)}
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            transition
            hover:text-slate-700
          "
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
