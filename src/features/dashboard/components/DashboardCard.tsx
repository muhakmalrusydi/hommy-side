import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  children: ReactNode;
};

export function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">{title}</h2>

      {children}
    </div>
  );
}
