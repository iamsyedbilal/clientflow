import Section from "@/components/shared/Section";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import HeroReveal from "@/components/shared/HeroReveal";
import ScrollReveal from "@/components/shared/DashboardReveal";

export default function Hero() {
  return (
    <Section>
      <Container>
        <HeroReveal>
          <HeroContent />
        </HeroReveal>
        <ScrollReveal>
          <HeroDashboard />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
