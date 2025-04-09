"use client";

import About from "@/pages/About";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold mb-6">🌗 Dark Mode Toggle</h1>
        <ThemeToggle />
        <Home />
        <About />
        <Services />
      </main>
    </>
  );
}
