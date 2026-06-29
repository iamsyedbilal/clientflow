import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section>
      <Container>
        <HeroContent />
        <HeroDashboard />
      </Container>
    </section>
  );
}
