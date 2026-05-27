import {
  AtSign,
  Briefcase,
  Building2,
  Facebook,
  Image,
  Instagram,
  Palette,
  Shuffle,
  Smile,
  Sparkles,
} from "lucide-react";

export type PlatformId = "linkedin" | "instagram" | "facebook" | "x";
export type StyleId =
  | "professional"
  | "business"
  | "fun"
  | "artistic"
  | "casual"
  | "random";

export const platforms = [
  {
    id: "linkedin",
    name: "LinkedIn",
    size: "400x400",
    icon: Briefcase,
    tone: "bg-blue-50 text-blue-700 ring-blue-100",
  },
  {
    id: "instagram",
    name: "Instagram",
    size: "320x320",
    icon: Instagram,
    tone: "bg-pink-50 text-pink-700 ring-pink-100",
  },
  {
    id: "facebook",
    name: "Facebook",
    size: "180x180",
    icon: Facebook,
    tone: "bg-sky-50 text-sky-700 ring-sky-100",
  },
  {
    id: "x",
    name: "X / Twitter",
    size: "400x400",
    icon: AtSign,
    tone: "bg-slate-100 text-slate-700 ring-slate-200",
  },
] satisfies Array<{
  id: PlatformId;
  name: string;
  size: string;
  icon: typeof Briefcase;
  tone: string;
}>;

export const styles = [
  {
    id: "professional",
    name: "Professional",
    previewName: "Pro",
    image: "/mock-profiles/pro.svg",
    icon: Sparkles,
    accent: "from-blue-500 to-indigo-500",
  },
  {
    id: "business",
    name: "Business",
    previewName: "Business",
    image: "/mock-profiles/business.svg",
    icon: Building2,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    id: "fun",
    name: "Fun",
    previewName: "Fun",
    image: "/mock-profiles/fun.svg",
    icon: Smile,
    accent: "from-rose-500 to-amber-400",
  },
  {
    id: "artistic",
    name: "Artistic",
    previewName: "Artistic",
    image: "/mock-profiles/artistic.svg",
    icon: Palette,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "casual",
    name: "Casual",
    previewName: "Casual",
    image: "/mock-profiles/casual.svg",
    icon: Image,
    accent: "from-emerald-500 to-teal-400",
  },
  {
    id: "random",
    name: "Random",
    previewName: "Random",
    image: "/mock-profiles/random.svg",
    icon: Shuffle,
    accent: "from-purple-500 to-emerald-400",
  },
] satisfies Array<{
  id: StyleId;
  name: string;
  previewName: string;
  image: string;
  icon: typeof Sparkles;
  accent: string;
}>;

export const originalImage = "/mock-profiles/original.svg";
