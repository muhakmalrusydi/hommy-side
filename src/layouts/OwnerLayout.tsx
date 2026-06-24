import { Outlet } from "react-router-dom";

import { OwnerSidebar } from "@/shared/components/navigation/OwnerSidebar";
import { OwnerNavbar } from "@/shared/components/navigation/OwnerNavbar";

export function OwnerLayout() {
  return (
    <div className="min-h-screen">
      <OwnerSidebar />

      <div className="ml-64 flex min-h-screen flex-col">
        <OwnerNavbar />

        <main className="flex-1 bg-slate-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
