export const supabaseTables = {
  users: "users",
  generations: "generations",
} as const;

export const supabaseStorageBuckets = {
  uploadedImages: "uploaded_images",
  generatedImages: "generated_images",
} as const;

export function getSupabasePublicConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };
}

export function getAiImageConfig() {
  return {
    apiUrl: process.env.AI_IMAGE_API_URL ?? "",
    apiKey: process.env.AI_IMAGE_API_KEY ?? "",
  };
}
