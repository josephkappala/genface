import {
  ArrowRight,
  BadgeCheck,
  ImageUp,
  Layers3,
  Lock,
  Palette,
  Sparkles,
  Wand2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const metrics = [
  ["6", "launch styles"],
  ["4", "platform presets"],
  ["5MB", "safe upload limit"],
  ["3 sec", "mock generation"],
];

const features = [
  {
    title: "Profile photos for every channel",
    body: "Generate polished square outputs sized for LinkedIn, Instagram, Facebook, and X.",
    icon: Layers3,
  },
  {
    title: "Styles that match the moment",
    body: "Switch between professional, business, fun, artistic, casual, and random looks.",
    icon: Palette,
  },
  {
    title: "Backend-ready generation flow",
    body: "The app already posts uploads to `/api/generate`, validates inputs, and returns structured image metadata.",
    icon: Wand2,
  },
  {
    title: "Upload safety baked in",
    body: "Only image files are accepted, and client plus server validation keeps uploads under 5MB.",
    icon: Lock,
  },
];

const workflow = [
  {
    title: "Upload or try the demo",
    body: "Use a clear profile photo, or click generate without one to test the mocked source image.",
    icon: ImageUp,
  },
  {
    title: "Pick platform and style",
    body: "Choose where the image is going and the tone you want for the final profile photo.",
    icon: Sparkles,
  },
  {
    title: "Generate and download",
    body: "The mock API returns downloadable result cards now, with a clear place to connect a real AI provider.",
    icon: BadgeCheck,
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    body: "For testing the flow and validating the product idea.",
    perks: ["1 free generation", "All six styles", "No credit card required"],
    cta: "Try free",
  },
  {
    name: "Creator",
    price: "$9",
    body: "For creators who refresh avatars across every platform.",
    perks: ["50 generations / month", "Priority styles", "Download history"],
    cta: "Coming soon",
  },
  {
    name: "Team",
    price: "$29",
    body: "For teams that need consistent profile visuals at scale.",
    perks: ["Shared workspace", "Brand presets", "Admin controls"],
    cta: "Coming soon",
  },
];

const faqs = [
  [
    "Does GenFace use real AI yet?",
    "Not yet. The UI and API route are ready, but the current response is mocked so the full product flow can be tested first.",
  ],
  [
    "Where does the AI API connect?",
    "The integration point is in `app/api/generate/route.ts`, using `AI_IMAGE_API_URL` and `AI_IMAGE_API_KEY`.",
  ],
  [
    "Is Supabase connected?",
    "The schema and environment placeholders are included. The next step is adding Supabase auth, storage uploads, and generation persistence.",
  ],
  [
    "Can users download generated images?",
    "Yes. The result cards include download links for the current mock assets.",
  ],
];

export function MarketingSections() {
  return (
    <>
      <section className="border-y border-slate-200 bg-slate-50/70 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-slate-950">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="features">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Features"
            title="Everything needed for a credible profile-photo MVP"
            body="GenFace is structured like a real SaaS product: polished UI, upload validation, backend route, storage placeholders, and a clean path to AI generation."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{feature.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="workflow">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Workflow"
            title="From one photo to platform-ready results"
            body="The product flow is short, obvious, and ready for a real image model behind the scenes."
            dark
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-blue-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-black text-white/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="pricing">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple plans for a focused product"
            body="The paid tiers are placeholders for the production roadmap. The free generation flow works today."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <article
                key={plan.name}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{plan.body}</p>
                  </div>
                  {index === 0 ? (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      Live
                    </span>
                  ) : null}
                </div>
                <p className="mt-7 text-4xl font-black text-slate-950">
                  {plan.price}
                  <span className="text-sm font-semibold text-slate-400"> / mo</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                      <BadgeCheck className="h-4 w-4 text-blue-600" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7 w-full" variant={index === 0 ? "default" : "outline"}>
                  <a href="#generator">{plan.cta}</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions before the AI gets connected"
            body="A quick read on what is live now and what is ready for the next integration pass."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-slate-950">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 p-8 text-white shadow-glow md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">Ready in seconds</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal">Create your next profile look</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
              Try the mock generation flow now, then connect your preferred AI image API when you are ready.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <a href="#generator">
              Start free
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={dark ? "text-sm font-bold text-blue-300" : "text-sm font-bold text-blue-600"}>
        {eyebrow}
      </p>
      <h2 className={dark ? "mt-3 text-4xl font-black tracking-normal text-white" : "mt-3 text-4xl font-black tracking-normal text-slate-950"}>
        {title}
      </h2>
      <p className={dark ? "mt-4 text-base leading-7 text-slate-300" : "mt-4 text-base leading-7 text-slate-500"}>
        {body}
      </p>
    </div>
  );
}
