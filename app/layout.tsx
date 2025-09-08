import "./globals.css";
import Navbar from "@/components/Navbar"; // <- exact path & capitalization

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* TEMP probe so you can see the layout is rendering */}
        <div className="bg-red-500/80 text-white text-center text-sm py-1">
          Layout loaded — Navbar should be below (remove this once confirmed)
        </div>

        <Navbar />

        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
