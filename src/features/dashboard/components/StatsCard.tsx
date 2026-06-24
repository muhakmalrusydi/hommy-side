import type { ReactNode } from "react";

type StatsCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon?: ReactNode;
};

export function StatsCard({ title, value, description, icon }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">{value}</h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">{description}</p>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-3/4 rounded-full bg-linear-to-r from-amber-600 to-amber-300" />
      </div>
    </div>
  );
}
