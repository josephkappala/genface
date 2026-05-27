import { Check } from "lucide-react";

import { platforms, type PlatformId } from "@/lib/genface-data";
import { cn } from "@/lib/utils";

type PlatformSelectorProps = {
  value: PlatformId;
  onChange: (value: PlatformId) => void;
};

export function PlatformSelector({ value, onChange }: PlatformSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {platforms.map((platform) => {
        const Icon = platform.icon;
        const active = value === platform.id;

        return (
          <button
            key={platform.id}
            type="button"
            onClick={() => onChange(platform.id)}
            className={cn(
              "group flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft",
              active &&
                "border-blue-600 bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_16px_40px_rgba(37,99,235,0.22)]",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-md ring-1",
                platform.tone,
                active && "bg-white/15 text-white ring-white/20",
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className={cn("block text-sm font-semibold text-slate-700", active && "text-white")}>
                {platform.name}
              </span>
              <span className={cn("mt-0.5 block text-xs font-semibold text-slate-400", active && "text-white/85")}>
                {platform.size}
              </span>
            </span>
            {active ? <Check className="absolute sr-only" /> : null}
          </button>
        );
      })}
    </div>
  );
}
