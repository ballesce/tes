import { Poppins, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "@/components/ClientLayout"; // ✅ pakai wrapper client

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reval RJR",
  description: "Full-Stack Development | Web & Mobile Apps | API & Database Integration | Cloud Computing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
