import { GeneratorCard } from "@/components/GeneratorCard";
import { MarketingSections } from "@/components/MarketingSections";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <SiteHeader />
      <GeneratorCard />
      <MarketingSections />
      <SiteFooter />
    </main>
  );
}
