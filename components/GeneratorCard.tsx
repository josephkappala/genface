"use client";

import { Loader2, Sparkles } from "lucide-react";
import * as React from "react";

import { PlatformSelector } from "@/components/PlatformSelector";
import { ResultsGrid } from "@/components/ResultsGrid";
import { StyleSelector } from "@/components/StyleSelector";
import { UploadBox } from "@/components/UploadBox";
import { Button } from "@/components/ui/button";
import {
  originalImage,
  type PlatformId,
  type StyleId,
} from "@/lib/genface-data";
import type {
  GenerateApiError,
  GenerateApiSuccess,
  GeneratedImage,
} from "@/lib/generation";

export function GeneratorCard() {
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null);
  const [uploadedPreview, setUploadedPreview] = React.useState<string | null>(null);
  const [platform, setPlatform] = React.useState<PlatformId>("linkedin");
  const [style, setStyle] = React.useState<StyleId>("professional");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [hasResults, setHasResults] = React.useState(false);
  const [generatedImages, setGeneratedImages] = React.useState<GeneratedImage[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    return () => {
      if (uploadedPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(uploadedPreview);
      }
    };
  }, [uploadedPreview]);

  function handleUpload(file: File, previewUrl: string) {
    if (uploadedPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(uploadedPreview);
    }
    setUploadedFile(file);
    setUploadedPreview(previewUrl);
    setErrorMessage(null);
    setHasResults(false);
    setGeneratedImages([]);
  }

  function clearUploadedImage() {
    if (uploadedPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(uploadedPreview);
    }
    setUploadedFile(null);
    setUploadedPreview(null);
    setGeneratedImages([]);
    setHasResults(false);
  }

  async function handleGenerate() {
    setIsGenerating(true);
    setHasResults(false);
    setErrorMessage(null);

    const imageFile = uploadedFile ?? (await createDemoImageFile());
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("platform", platform);
    formData.append("style", style);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as GenerateApiSuccess | GenerateApiError;

      if (!response.ok || "error" in payload) {
        setErrorMessage("error" in payload ? payload.error : "Generation failed.");
        return;
      }

      setGeneratedImages(payload.images);
      setHasResults(true);
      window.requestAnimationFrame(() => {
        document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
      });
    } catch {
      setErrorMessage("Could not reach the generator. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <section className="relative px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" id="generator">
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_70%_25%,rgba(99,102,241,0.12),rgba(255,255,255,0)_55%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-400" />
              AI-Powered Profile Photos
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Your perfect</span>
              <span className="block">profile.</span>
              <span className="mt-3 block bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                Every platform.
              </span>
              <span className="mt-3 block">Every style.</span>
              <span className="block bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                Instantly.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg font-medium leading-7 text-slate-500">
              Generate AI-powered profile photos for Instagram, LinkedIn,
              Facebook, X, and more. Professional quality in seconds.
            </p>

            <HeroTransformationPreview />
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-6">
            <div className="space-y-5">
              <div>
                <h2 className="mb-3 text-base font-bold text-slate-950">
                  Upload Photo <span className="text-slate-500">(Optional)</span>
                </h2>
                <UploadBox
                  previewUrl={uploadedPreview}
                  onUpload={handleUpload}
                  onError={(message) => {
                    setErrorMessage(message);
                    clearUploadedImage();
                  }}
                />
              </div>

              {errorMessage ? (
                <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                  {errorMessage}
                </div>
              ) : null}

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-950">
                    Select Platform
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">Output size</span>
                </div>
                <PlatformSelector value={platform} onChange={setPlatform} />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-950">
                    Choose Style
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">6 modes</span>
                </div>
                <StyleSelector value={style} onChange={setStyle} />
              </div>

              <div>
                <Button
                  type="button"
                  size="lg"
                  className="h-12 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 text-base shadow-[0_14px_30px_rgba(99,102,241,0.24)]"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating image...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Generate Image
                    </>
                  )}
                </Button>
                <p className="mt-5 text-center text-sm font-medium text-slate-500">
                  Try 1 free generation • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {hasResults ? (
        <ResultsGrid
          selectedPlatform={platform}
          selectedStyle={style}
          generatedImages={generatedImages}
          onRegenerate={handleGenerate}
          onTryAnotherStyle={() => {
            setHasResults(false);
            document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      ) : null}
    </>
  );
}

async function createDemoImageFile() {
  const response = await fetch(originalImage);
  const blob = await response.blob();
  return new File([blob], "genface-demo-profile.svg", {
    type: blob.type || "image/svg+xml",
  });
}

function HeroTransformationPreview() {
  return (
    <div className="mt-7 max-w-2xl">
      <img
        src="/hero-transformation-preview.png"
        alt="Original profile transformed into six AI-generated profile styles"
        className="w-full rounded-lg object-contain"
      />
    </div>
  );
}
