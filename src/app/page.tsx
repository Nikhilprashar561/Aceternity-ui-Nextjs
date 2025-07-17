import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSections";
import Instructor from "@/components/Instructor";
import MusicTestimonials from "@/components/MusicTestimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <MusicTestimonials />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
