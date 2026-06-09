type StatCardProps = {
  label: string
  value: string
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <article className="rounded-3xl border border-slate-900/8 bg-white/95 p-5 shadow-[0_12px_30px_rgba(20,33,61,0.08)]">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
    </article>
  )
}
