import Hero from "@/components/Hero"; // if this fails, use: import Hero from "../components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero imageSrc="/hero-graphic.png" imageAlt="Students learning organic chemistry" />
    </main>
  );
}
