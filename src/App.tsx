import './index.css'
import Header from "@/layouts/Header.tsx";
import AboutPage from "@/pages/AboutPage";
import TeamPage from "@/pages/TeamPage";
import Footer from "@/layouts/Footer.tsx";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import {useRef} from "react";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='w-screen h-screen flex flex-col bg-[#F7F7FB] min-w-[1600px]'>
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onTeamClick={() => scrollTo(teamRef)}
        onServicesClick={() => scrollTo(servicesRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={teamRef}>
        <TeamPage />
      </div>
      <div ref={servicesRef}>
        <ServicesPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
      <Footer />
    </div>
  )
}

export default App
