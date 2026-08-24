import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Map from "@/components/layout/Map";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero />

      <Map />
    </main>
  );
}