import { Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PreviewGallery } from "@/components/PreviewGallery";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),rgba(59,130,246,0.11)_34%,rgba(255,255,255,0)_70%)]" />
      <nav className="mx-auto mb-10 flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold text-slate-950">GenFace</span>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href="#generator">Start free</a>
        </Button>
      </nav>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Zap className="h-4 w-4" />
            AI-Powered Profile Photos
          </div>
          <h1 className="text-balance text-5xl font-black tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            <span className="block">Your perfect profile.</span>
            <span className="block">Every platform.</span>
            <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Every style. Instantly.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Generate AI-powered profile photos for Instagram, LinkedIn, Facebook,
            X, and more. Professional quality in seconds.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#generator">
                <Sparkles className="h-5 w-5" />
                Generate your profile
              </a>
            </Button>
            <p className="text-sm font-medium text-slate-500">
              Try 1 free generation • No credit card required
            </p>
          </div>
        </div>

        <div className="mt-12">
          <PreviewGallery />
        </div>
      </div>
    </section>
  );
}
