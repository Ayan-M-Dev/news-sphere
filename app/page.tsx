import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import Team from "@/components/sections/Team";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex-1 w-full">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Team />
      </main>

      <Footer />
    </div>
  );
}
