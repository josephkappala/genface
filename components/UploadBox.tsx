"use client";

import { ImagePlus, UploadCloud } from "lucide-react";
import * as React from "react";

import { MAX_UPLOAD_SIZE_BYTES, MAX_UPLOAD_SIZE_LABEL } from "@/lib/generation";
import { cn } from "@/lib/utils";

type UploadBoxProps = {
  previewUrl: string | null;
  onUpload: (file: File, previewUrl: string) => void;
  onError: (message: string) => void;
};

export function UploadBox({ previewUrl, onUpload, onError }: UploadBoxProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleFile(file: File | undefined) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      onError("Only image uploads are supported.");
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    if (file.size > MAX_UPLOAD_SIZE_BYTES) {
      onError(`Image must be ${MAX_UPLOAD_SIZE_LABEL} or smaller.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    onUpload(file, URL.createObjectURL(file));
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={cn(
          "group flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-soft",
          previewUrl && "border-blue-300 bg-blue-50 text-blue-700",
        )}
      >
        {previewUrl ? (
          <span className="flex h-7 w-7 overflow-hidden rounded-md ring-1 ring-blue-200">
            <img
              src={previewUrl}
              alt="Uploaded profile preview"
              className="h-full w-full object-cover"
            />
          </span>
        ) : (
          <UploadCloud className="h-4 w-4" />
        )}
        {previewUrl ? "Photo uploaded" : "Upload Photo"}
        {!previewUrl ? <ImagePlus className="h-4 w-4 text-blue-600" /> : null}
      </button>
    </div>
  );
}
