import "./globals.css";

export const metadata = {
  title: "Orgopros — Organic Chemistry Tutoring",
  description: "Student-first organic chemistry tutoring by professional chemists.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
