"use client";

import { Download, RefreshCw, Repeat2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { platforms, styles, type PlatformId, type StyleId } from "@/lib/genface-data";
import type { GeneratedImage } from "@/lib/generation";

type ResultsGridProps = {
  selectedPlatform: PlatformId;
  selectedStyle: StyleId;
  generatedImages: GeneratedImage[];
  onRegenerate: () => void;
  onTryAnotherStyle: () => void;
};

export function ResultsGrid({
  selectedPlatform,
  selectedStyle,
  generatedImages,
  onRegenerate,
  onTryAnotherStyle,
}: ResultsGridProps) {
  const platform = platforms.find((item) => item.id === selectedPlatform) ?? platforms[0];
  const chosenStyle = styles.find((item) => item.id === selectedStyle) ?? styles[0];
  const fallbackImages: GeneratedImage[] = [
    chosenStyle,
    ...styles.filter((item) => item.id !== chosenStyle.id),
  ]
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      style: item.id,
      label: item.name,
      url: item.image,
    }));
  const results = generatedImages.length > 0 ? generatedImages : fallbackImages;

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 lg:px-8" id="results">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-600">Generated results</p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal text-slate-950">
            Fresh profile photos for {platform.name}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Mock images today, ready for a real generation backend tomorrow.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={onTryAnotherStyle}>
            <Repeat2 className="h-4 w-4" />
            Try another style
          </Button>
          <Button onClick={onRegenerate}>
            <RefreshCw className="h-4 w-4" />
            Regenerate
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((image, index) => (
          <article
            key={image.id}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="bg-slate-50 p-3">
              <img
                src={image.url}
                alt={`${image.label} generated profile result`}
                className="mx-auto aspect-square w-full max-w-32 rounded-md object-cover ring-1 ring-slate-200"
              />
            </div>
            <div className="p-3">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">{image.label}</h3>
                  <p className="text-xs text-slate-500">
                    {platform.size} output {index === 0 ? "match" : "variant"}
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Ready
                </span>
              </div>
              <Button asChild className="w-full" variant="outline">
                <a href={image.url} download={`genface-${image.style}-${platform.id}.svg`}>
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
