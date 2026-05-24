interface PullTestRibbonProps {
  message?: string;
}

export function PullTestRibbon({
  message = "round-3 ribbon — added by remote",
}: PullTestRibbonProps) {
  return (
    <div className="fixed top-0 left-1/2 z-50 -translate-x-1/2 rounded-b-md bg-fuchsia-600 px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md">
      {message}
    </div>
  );
}
