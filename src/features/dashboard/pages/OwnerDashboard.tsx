/* Komponen */
import { StatsCard } from "@/features/dashboard/components/StatsCard";
import { DashboardCard } from "@/features/dashboard/components/DashboardCard";
/* Data */
import { dashboardStats } from "@/features/dashboard/data/dashboardStats";
import { dashboardAttention } from "@/features/dashboard/data/dashboardAttention";
import { dashboardActivities } from "@/features/dashboard/data/dashboardActivities";
import { dashboardAnnouncements } from "@/features/dashboard/data/dashboardAnnouncements";
import { iconMap } from "@/shared/constants/iconMap";
import { Plus, Megaphone, Eye } from "lucide-react";

export function OwnerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

        <p className="text-sm text-slate-500">
          Ringkasan operasional dan aktivitas Hommy Side.
        </p>
      </section>

      {/* Statistik */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];

          return (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={<Icon size={24} />}
            />
          );
        })}
      </section>

      <DashboardCard title="Operasional Hari Ini">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Perlu Perhatian */}
          <div>
            <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">
                6 tindakan memerlukan perhatian
              </p>

              <p className="mt-1 text-xs text-amber-600">
                Fokus pada pembayaran menunggak, kontrak yang akan berakhir, dan
                permintaan perbaikan aktif.
              </p>
            </div>

            <h3 className="mb-4 font-semibold text-slate-800">
              Perlu Perhatian
            </h3>

            <div className="space-y-3">
              {dashboardAttention.map((section) => (
                <div
                  key={section.category}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${section.color}`} />

                    <h4 className="font-medium text-slate-800">
                      {section.category}
                    </h4>

                    <span className="ml-auto rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                      {section.items.length}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-500">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-slate-50 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Aktivitas */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">
                Aktivitas Terbaru
              </h3>

              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-1">
              {dashboardActivities.map((activity, index) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />

                    {index !== dashboardActivities.length - 1 && (
                      <div className="mt-1 h-full w-px bg-slate-200" />
                    )}
                  </div>

                  <div className="flex-1 rounded-xl border border-slate-100 p-4 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50">
                    <p className="text-sm text-slate-700">{activity.message}</p>

                    <p className="mt-2 text-xs text-slate-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardCard>

      {/* Pengumuman */}
      <DashboardCard title="Pengumuman">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">Daftar informasi</h3>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600">
              <Plus size={16} />
              Pengumuman
            </button>
          </div>

          <div className="space-y-3">
            {dashboardAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                    <Megaphone size={18} />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">
                      {announcement.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {announcement.description}
                    </p>

                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {announcement.views} penghuni
                      </span>

                      <span>{announcement.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardCard>
    </div>
  );
}
