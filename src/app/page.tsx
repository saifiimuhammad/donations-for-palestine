import Contact from "@/sections/Contact";
import DonationList from "@/sections/DonationList";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <DonationList />
      <Contact />
    </div>
  );
}
