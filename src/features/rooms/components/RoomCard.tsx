import { BedDouble, User, CircleDollarSign } from "lucide-react";

type RoomCardProps = {
  number: string;
  price: number;
  status: "occupied" | "vacant";
  tenant: string | null;
};

export function RoomCard({ number, price, status, tenant }: RoomCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">Nomor Kamar</p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">{number}</h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            status === "occupied"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status === "occupied" ? "Terisi" : "Kosong"}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <CircleDollarSign size={16} />

          <span>Rp{price.toLocaleString("id-ID")} / bulan</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <User size={16} />

          <span>{tenant ?? "Belum ada penyewa"}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <BedDouble size={16} />

          <span>Kamar Standar</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          Detail
        </button>

        <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Edit
        </button>
      </div>
    </div>
  );
}
