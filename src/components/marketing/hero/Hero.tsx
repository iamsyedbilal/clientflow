import Section from "@/components/shared/Section";
import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <Section>
      <Container>
        <HeroContent />
        <HeroDashboard />
      </Container>
    </Section>
  );
}
