import { NextResponse } from "next/server";

import {
  getMockGeneratedImages,
  isAllowedImageFile,
  isAllowedPlatform,
  isAllowedStyle,
  MAX_UPLOAD_SIZE_BYTES,
  MAX_UPLOAD_SIZE_LABEL,
  type GenerateApiError,
  type GenerateApiSuccess,
} from "@/lib/generation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const image = formData.get("image");
  const platform = formData.get("platform");
  const style = formData.get("style");

  if (!(image instanceof File)) {
    return jsonError("Upload a profile image before generating.", 400);
  }

  if (!isAllowedImageFile(image)) {
    return jsonError("Only image uploads are supported.", 400);
  }

  if (image.size > MAX_UPLOAD_SIZE_BYTES) {
    return jsonError(`Image must be ${MAX_UPLOAD_SIZE_LABEL} or smaller.`, 400);
  }

  if (!isAllowedPlatform(platform)) {
    return jsonError("Choose a supported platform.", 400);
  }

  if (!isAllowedStyle(style)) {
    return jsonError("Choose a supported style.", 400);
  }

  // Supabase integration point:
  // 1. Upload the source file to the uploaded_images storage bucket.
  // 2. Create a pending row in public.generations for the authenticated user.
  // 3. Store generated outputs in generated_images after the AI job completes.

  // Future AI image generation API connection:
  // Send `image`, `platform`, and `style` to process.env.AI_IMAGE_API_URL using
  // process.env.AI_IMAGE_API_KEY, then map the provider response to `images`.
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response: GenerateApiSuccess = {
    generationId: crypto.randomUUID(),
    status: "mocked",
    platform,
    style,
    images: getMockGeneratedImages(style),
    message: "Mock generation complete. Replace this with the real AI provider call.",
  };

  return NextResponse.json(response);
}

function jsonError(error: string, status: number) {
  const body: GenerateApiError = { error };
  return NextResponse.json(body, { status });
}
