import AboutSection from "../AboutSection/AboutSection";
import AchievementSection from "../AchievementSection/AchievementSection";
import ContactSection from "../ContactSection/ContactSection";
import ExpertiseSection from "../ExpertiseSection/ExpertiseSection";
import Footer from "../Footer/Footer";
import HomeSection from "../HomeSection/HomeSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import Project from "../Project/Project";

export default function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
      <AchievementSection />
      <Project />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
