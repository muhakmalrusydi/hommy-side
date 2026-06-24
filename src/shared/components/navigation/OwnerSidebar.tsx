import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  CreditCard,
  UserRound,
  Wrench,
  Megaphone,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: LayoutDashboard,
  },
  {
    name: "Kamar",
    path: "/owner/rooms",
    icon: Building2,
  },
  {
    name: "Penyewa",
    path: "/owner/tenants",
    icon: Users,
  },
  {
    name: "Kontrak",
    path: "/owner/contracts",
    icon: FileText,
  },
  {
    name: "Pembayaran",
    path: "/owner/payments",
    icon: CreditCard,
  },
  {
    name: "Izin Tamu",
    path: "/owner/guests",
    icon: UserRound,
  },
  {
    name: "Perbaikan",
    path: "/owner/maintenance",
    icon: Wrench,
  },
  {
    name: "Pengumuman",
    path: "/owner/announcements",
    icon: Megaphone,
  },
  {
    name: "Laporan",
    path: "/owner/reports",
    icon: BarChart3,
  },
  {
    name: "Pengaturan",
    path: "/owner/settings",
    icon: Settings,
  },
];

export function OwnerSidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-blue-600">
      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-white">Hommy Side</h1>

        <p className="text-sm text-blue-100">Manajemen Sistem</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/owner"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  <Icon size={18} />

                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <button className="w-full rounded-xl bg-white py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100">
          Keluar
        </button>
      </div>
    </aside>
  );
}
