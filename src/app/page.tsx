import ProjectComponents from "./components/ProjectComponent";
import TechStackMarqueeComponent from "./components/TechStackMarqueeComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import NavBarComponent from "./components/NavBarComponent";
import HeroComponent from "./components/HeroComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import BackToTopButton from "./components/buttons/BackToTopButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fefefe]">
      <NavBarComponent />

      <HeroComponent />

      <TechStackMarqueeComponent />

      <AboutMeComponent />

      <ExperienceComponent />

      <ProjectComponents />

      <BackToTopButton />
    </main>
  );
}
