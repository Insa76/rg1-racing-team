// components/ui/Stat.tsx

interface StatProps {
  value: string;
  label: string;
}

export default function Stat({
  value,
  label,
}: StatProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-black text-secondary">
        {value}
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted">
        {label}
      </p>
    </div>
  );
}