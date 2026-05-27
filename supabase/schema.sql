-- GenFace Supabase placeholder schema.
-- Apply and adapt this once authentication and real generation persistence are enabled.

create table if not exists public.users (
  id uuid primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  platform text not null,
  style text not null,
  source_image_path text,
  generated_image_paths text[] not null default '{}',
  status text not null default 'pending',
  error_message text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Storage bucket placeholders:
-- uploaded_images: original user uploads before processing.
-- generated_images: AI-generated profile outputs ready for download.
--
-- Recommended setup in Supabase Dashboard:
-- 1. Create private bucket: uploaded_images
-- 2. Create private bucket: generated_images
-- 3. Add storage policies scoped by authenticated user id.
