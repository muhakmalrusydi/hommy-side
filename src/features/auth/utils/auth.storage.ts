export function setAuthSession(user: unknown) {
  localStorage.setItem(
    "isAuthenticated",
    "true"
  );

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
}

export function getAuthSession() {
  return {
    isAuthenticated:
      localStorage.getItem(
        "isAuthenticated"
      ) === "true",

    user: JSON.parse(
      localStorage.getItem("user") ?? "null"
    ),
  };
}

export function clearAuthSession() {
  localStorage.removeItem(
    "isAuthenticated"
  );

  localStorage.removeItem("user");
}