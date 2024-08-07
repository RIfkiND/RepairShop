import { Container } from "@/components/Home/Container";
import { Hero } from "@/components/Home/Hero";
import { SectionTitle } from "@/components/Home/SectionTitle";
import { Benefits } from "@/components/Home/Benefits";
import { Video } from "@/components/Home/Video";
import { Testimonials } from "@/components/Home/Testimonials";
import { Faq } from "@/components/Home/Faq";
import { Cta } from "@/components/Home/Cta";
import { Navbar } from "@/components/Home/Navbar";
import { benefitOne, benefitTwo } from  "@/components/Home/data";
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
       from PCs, cellphones, laptops, printers and digital watches
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

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
      <Cta />
    </Container>
  );
}
