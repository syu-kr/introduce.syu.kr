import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import RecruitSection from "@/components/RecruitSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <StatsSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ProjectsSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <TeamSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <RecruitSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ProcessSection />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
