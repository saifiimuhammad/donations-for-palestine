"use client";

import { useRef } from "react";

import Contact from "@/sections/Contact";
import DonationList from "@/sections/DonationList";
import Hero from "@/sections/Hero";

export default function Home() {
  const donationRef = useRef<HTMLDivElement>(null);
  return (
    <main className="w-full h-screen">
      <Hero
        scrollToDonation={() =>
          donationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={donationRef}>
        <DonationList />
      </div>
      <Contact />
    </main>
  );
}
