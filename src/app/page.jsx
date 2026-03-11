import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import About from "@/components/About";
import UpcomingEvent from "@/components/UpcomingEvent";
import Data from "@/components/Data";
import TeamPreview from "@/components/TeamPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col m-0 p-0">
      <Navbar />
      <Hero />
      <Content />
      <About />
      <UpcomingEvent />
      <Data />
      <TeamPreview />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
