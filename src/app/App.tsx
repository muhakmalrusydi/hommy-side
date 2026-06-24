import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "@/features/auth/pages/LoginPage";

import { OwnerLayout } from "@/layouts/OwnerLayout";
import { OwnerDashboard } from "@/features/dashboard/pages/OwnerDashboard";
import { Rooms } from "@/features/rooms/pages/Rooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/owner",
    element: <OwnerLayout />,
    children: [
      {
        index: true,
        element: <OwnerDashboard />,
      },

      {
        path: "rooms",
        element: <Rooms />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
