import { Check } from "lucide-react";

import { styles, type StyleId } from "@/lib/genface-data";
import { cn } from "@/lib/utils";

type StyleSelectorProps = {
  value: StyleId;
  onChange: (value: StyleId) => void;
};

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {styles.map((style) => {
        const Icon = style.icon;
        const active = value === style.id;

        return (
          <button
            key={style.id}
            type="button"
            onClick={() => onChange(style.id)}
            className={cn(
              "group relative flex min-h-16 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg border border-slate-200 bg-white p-2.5 text-center transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-soft",
              active &&
                "border-blue-500 bg-blue-50 shadow-[0_0_0_3px_rgba(37,99,235,0.08)]",
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br text-white shadow-sm",
                style.accent,
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="block text-xs font-semibold text-slate-700">
              {style.name}
            </span>
            {active ? (
              <Check className="absolute right-2 top-2 h-4 w-4 text-blue-600" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
