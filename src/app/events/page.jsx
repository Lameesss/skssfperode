import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Events — SKSSF Perode Shaka",
  description: "Upcoming and previous events by the SKSSF Perode Shaka community committee",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navbar />
      <Events />
      <Footer />
    </main>
  );
}
