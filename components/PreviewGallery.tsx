import { ArrowRight, Sparkles } from "lucide-react";

import { originalImage, styles } from "@/lib/genface-data";

export function PreviewGallery() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/50 via-violet-200/40 to-cyan-100/50 blur-2xl" />
      <div className="grid items-center gap-3 rounded-lg border border-slate-200 bg-white/85 p-3 shadow-glow backdrop-blur md:grid-cols-[140px_auto_1fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-950">Original</span>
            <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              Uploaded
            </span>
          </div>
          <img
            src={originalImage}
            alt="Original uploaded profile"
            className="mx-auto aspect-square w-full max-w-28 rounded-lg object-cover"
          />
        </div>

        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg md:rotate-0">
          <ArrowRight className="h-3.5 w-3.5 rotate-90 md:rotate-0" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {styles.map((style) => (
            <div
              key={style.id}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white p-1.5 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={style.image}
                  alt={`${style.previewName} generated profile example`}
                  className="mx-auto aspect-square w-full max-w-24 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-violet-600 shadow-sm backdrop-blur">
                  <Sparkles className="h-3 w-3" />
                </div>
              </div>
              <p className="mt-1.5 truncate text-center text-[11px] font-semibold text-slate-700">
                {style.previewName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
