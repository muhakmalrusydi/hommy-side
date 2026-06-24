import { RoomCard, RoomStats} from "@/features/rooms/components"

import { rooms } from "@/features/rooms/data/rooms";
import { useRoomStats } from "@/features/rooms/hooks/useRoomsStats";

export function Rooms() {
  // =========================
  // Statistik Kamar
  // =========================
  const { totalRooms, occupiedRooms, vacantRooms, occupancyRate } =
    useRoomStats();

  return (
    <div className="space-y-6">
      {/* =========================
          Header
      ========================= */}
      <section>
        <h1 className="text-2xl font-bold text-slate-800">Manajemen Kamar</h1>

        <p className="mt-1 text-sm text-slate-500">
          Kelola seluruh kamar, status hunian, dan informasi penyewa.
        </p>
      </section>

      {/* =========================
          Statistik Kamar
      ========================= */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <RoomStats
          title="Total Kamar"
          value={totalRooms}
          description="Seluruh kamar terdaftar"
        />

        <RoomStats
          title="Kamar Terisi"
          value={occupiedRooms}
          description="Sedang ditempati penyewa"
        />

        <RoomStats
          title="Kamar Kosong"
          value={vacantRooms}
          description="Siap untuk disewakan"
        />

        <RoomStats
          title="Occupancy Rate"
          value={`${occupancyRate}%`}
          description="Tingkat keterisian kamar"
        />
      </section>

      {/* =========================
          Toolbar
      ========================= */}
      <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Cari nomor kamar..."
          className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-blue-500 md:max-w-sm"
        />

        <div className="flex gap-3">
          {/* Filter */}
          <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            <option>Semua Status</option>
            <option>Terisi</option>
            <option>Kosong</option>
          </select>

          {/* Tambah Kamar */}
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            + Tambah Kamar
          </button>
        </div>
      </section>

      {/* =========================
          Daftar Kamar
      ========================= */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">Daftar Kamar</h2>

          <p className="text-sm text-slate-500">
            {rooms.length} kamar ditemukan
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              number={room.number}
              price={room.price}
              status={room.status}
              tenant={room.tenant}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
