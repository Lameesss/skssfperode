import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

export const metadata = {
  title: "Team — SKSSF Perode Shaka",
  description: "Meet the team behind SKSSF Perode Shaka",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navbar />
      <Team />
    </main>
  );
}
