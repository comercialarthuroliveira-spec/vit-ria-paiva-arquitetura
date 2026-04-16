import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
