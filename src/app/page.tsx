import { Container } from "@/components/Home/Container";
import { Hero } from "@/components/Home/Hero";
import { SectionTitle } from "@/components/Home/SectionTitle";
import { Benefits } from "@/components/Home/Benefits";

import { Testimonials } from "@/components/Home/Testimonials";
import { Faq } from "@/components/Home/Faq";

import { Navbar } from "@/components/Home/Navbar";
import {FloatRequest} from "@/components/Home/FloatRequest";
import { benefitOne, benefitTwo } from  "@/components/Home/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container>
        <Navbar/>
      <Hero />
      <SectionTitle
        preTitle="DeRepair Benefits"
        title="Why you Should Trust Us"
      >
       DeRepair has repaired many devices ranging 
       from PCs, cellphones, laptops, printers 
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
  
    </Container>
  );
}
