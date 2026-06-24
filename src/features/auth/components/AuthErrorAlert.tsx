type AuthErrorAlertProps = {
  message?: string;
};

export function AuthErrorAlert({ message }: AuthErrorAlertProps) {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="
        rounded-xl
        border
        border-red-200
        bg-red-50
        px-4
        py-3
      "
    >
      <p className="text-sm font-medium text-red-700">{message}</p>
    </div>
  );
}
