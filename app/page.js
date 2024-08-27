import About from "@/components/orgnasims/About";
import Banner from "@/components/orgnasims/Banner";
import Clients from "@/components/orgnasims/Clients";
import Contact from "@/components/orgnasims/Contact";
import Process from "@/components/orgnasims/Process";
import Projects from "@/components/orgnasims/Projects";
import Services from "@/components/orgnasims/Services";
import Testimonials from "@/components/orgnasims/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
<main className="flex flex-col gap-[50px]">
    <Banner />
    <Services />
    <About />
    <Projects />
    <Process />
    <Testimonials />
    <Clients />
    <Contact />
  </main>
  );
}
