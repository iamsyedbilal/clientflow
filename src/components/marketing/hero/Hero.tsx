import Section from "@/components/shared/Section";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import HeroReveal from "@/components/shared/HeroReveal";

export default function Hero() {
  return (
    <Section>
      <Container>
        <HeroReveal>
          <HeroContent />
          <HeroDashboard />
        </HeroReveal>
      </Container>
    </Section>
  );
}
