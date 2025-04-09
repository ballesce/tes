"use client";

import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="flex justify-end px-6 pt-4">
        <ThemeToggle />
      </div>
      <main>{children}</main>
    </ThemeProvider>
  );
}
