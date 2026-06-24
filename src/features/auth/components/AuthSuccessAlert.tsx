type AuthSuccessAlertProps = {
  message?: string;
};

export function AuthSuccessAlert({ message }: AuthSuccessAlertProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="
        rounded-xl
        border
        border-green-200
        bg-green-50
        px-4
        py-3
      "
    >
      <p className="text-sm font-medium text-green-700">{message}</p>
    </div>
  );
}
