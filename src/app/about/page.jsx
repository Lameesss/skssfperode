import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — SKSSF Perode Shaka",
  description: "Learn about the SKSSF Perode Shaka community committee, our services, and our mission.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}
