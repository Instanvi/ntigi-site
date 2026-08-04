import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PlatformOverview from "@/components/PlatformOverview";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FeaturesGrid />
        <PlatformOverview />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
