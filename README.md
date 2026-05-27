# GenFace

Your perfect profile. Every platform. Every style. Instantly.

GenFace is a polished SaaS MVP for generating AI-powered profile photos from one uploaded image. The current app includes a working mock generation flow, frontend validation, and a backend-ready API route that can be connected to a real image generation provider later.

## Features

- Modern SaaS hero with a working generator tool
- Optional profile photo upload
- Platform presets for LinkedIn, Instagram, Facebook, and X / Twitter
- Style presets: Professional, Business, Fun, Artistic, Casual, and Random
- Mock `/api/generate` route with a 3-second generation delay
- Image-only upload validation with a 5MB file limit
- Supabase placeholder schema for users, generations, and storage buckets
- Tailwind CSS and shadcn-style UI primitives

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react
- Supabase-ready structure

## Getting Started

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env.local
```

Fill in these values when you connect real services:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
AI_IMAGE_API_KEY=
AI_IMAGE_API_URL=
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## API Route

`POST /api/generate`

Accepts multipart form data:

- `image`: uploaded image file
- `platform`: `linkedin`, `instagram`, `facebook`, or `x`
- `style`: `professional`, `business`, `fun`, `artistic`, `casual`, or `random`

The route currently returns mocked generated image metadata. The real AI image provider call should be added in:

```bash
app/api/generate/route.ts
```

## Supabase Placeholders

The placeholder schema lives in:

```bash
supabase/schema.sql
```

Planned tables:

- `public.users`
- `public.generations`

Planned storage buckets:

- `uploaded_images`
- `generated_images`

## Deployment

This project includes a Next.js API route, so deploy it to a platform that supports server-side Next.js routes, such as Vercel or Netlify.

GitHub Pages is not recommended for the live app because it cannot run `/api/generate`.
