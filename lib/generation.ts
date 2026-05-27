import type { PlatformId, StyleId } from "@/lib/genface-data";

export const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;
export const MAX_UPLOAD_SIZE_LABEL = "5MB";

export const allowedPlatforms = ["linkedin", "instagram", "facebook", "x"] as const;
export const allowedStyles = [
  "professional",
  "business",
  "fun",
  "artistic",
  "casual",
  "random",
] as const;

export type GeneratedImage = {
  id: string;
  style: StyleId;
  label: string;
  url: string;
};

export type GenerateApiSuccess = {
  generationId: string;
  status: "mocked";
  platform: PlatformId;
  style: StyleId;
  images: GeneratedImage[];
  message: string;
};

export type GenerateApiError = {
  error: string;
};

export function isAllowedPlatform(value: FormDataEntryValue | null): value is PlatformId {
  return typeof value === "string" && allowedPlatforms.includes(value as PlatformId);
}

export function isAllowedStyle(value: FormDataEntryValue | null): value is StyleId {
  return typeof value === "string" && allowedStyles.includes(value as StyleId);
}

export function isAllowedImageFile(file: File) {
  return file.type.startsWith("image/");
}

export function getMockGeneratedImages(style: StyleId): GeneratedImage[] {
  const preferredOrder: GeneratedImage[] = [
    {
      id: "professional",
      style: "professional",
      label: "Professional",
      url: "/mock-profiles/pro.svg",
    },
    {
      id: "business",
      style: "business",
      label: "Business",
      url: "/mock-profiles/business.svg",
    },
    {
      id: "fun",
      style: "fun",
      label: "Fun",
      url: "/mock-profiles/fun.svg",
    },
    {
      id: "artistic",
      style: "artistic",
      label: "Artistic",
      url: "/mock-profiles/artistic.svg",
    },
    {
      id: "casual",
      style: "casual",
      label: "Casual",
      url: "/mock-profiles/casual.svg",
    },
    {
      id: "random",
      style: "random",
      label: "Random",
      url: "/mock-profiles/random.svg",
    },
  ];

  return [
    ...preferredOrder.filter((image) => image.style === style),
    ...preferredOrder.filter((image) => image.style !== style),
  ].slice(0, 4);
}
