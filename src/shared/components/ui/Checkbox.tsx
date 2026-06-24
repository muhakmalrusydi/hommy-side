import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input
        type="checkbox"
        className={`
          h-4
          w-4
          rounded
          border-slate-300
          text-blue-600
          ${className}
        `}
        {...props}
      />

      <span className="text-sm text-slate-600">{label}</span>
    </label>
  );
}
