import { Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-black text-slate-950">GenFace</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            AI-powered profile photo generation for every platform and style.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-400">
        © 2026 GenFace. Mock generation MVP.
      </div>
    </footer>
  );
}
