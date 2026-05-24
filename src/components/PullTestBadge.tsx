interface PullTestBadgeProps {
  label?: string;
}

export function PullTestBadge({
  label = "pulled-round-3",
}: PullTestBadgeProps) {
  return (
    <div className="fixed bottom-3 right-3 z-50 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-lg ring-2 ring-emerald-300">
      {label}
    </div>
  );
}
