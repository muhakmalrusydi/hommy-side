import { Bell, Search } from "lucide-react";

export function OwnerNavbar() {
  return (
    <header className="sticky top-0 grid h-16 grid-cols-3 items-center border-b border-slate-100 bg-white px-6">
      {/* Kolom Kiri: Dikosongkan secara bersih menggunakan flex-start */}
      <div className="flex justify-start" />

      {/* Kolom Tengah: Search Bar (Clean & Modern Design) */}
      <div className="w-full max-w-md justify-self-center">
        <div className="relative group">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-slate-600"
          />
          <input
            type="text"
            placeholder="Klik untuk memulai pencarian"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 ease-in-out hover:bg-slate-50 focus:border-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Kolom Kanan: Actions (Notification & Profile) */}
      <div className="flex items-center gap-5 justify-self-end">
        <button className="relative p-1.5 text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-700 transition-colors">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="h-5 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-600">
            A
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-800 leading-tight">
              Akmal
            </p>
            <p className="text-xs text-slate-400 font-medium">Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
