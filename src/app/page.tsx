import Navbar from "@/components/marketing/navbar/Navbar";
import Hero from "@/components/marketing/hero/Hero";
import ClientCRM from "@/components/marketing/sections/ClientCRM/ClientCRM";
import ProjectManagement from "@/components/marketing/sections/Project Management/ProjectManagement";
import Invoicing from "@/components/marketing/sections/Invoicing/Invoicing";
import Analytics from "@/components/marketing/sections/Analytics/Analytics";
import ClientPortal from "@/components/marketing/sections/ClientPortal/ClientPortal";
import Automation from "@/components/marketing/sections/Automation/Automation";
import Integrations from "@/components/marketing/sections/Integrations/Integrations";
import Pricing from "@/components/marketing/sections/Pricing/Pricing";
import FAQ from "@/components/marketing/sections/FAQ/FAQ";
import CTA from "@/components/marketing/sections/CTA/CTA";
import Footer from "@/components/marketing/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientCRM />
        <ProjectManagement />
        <Invoicing />
        <Analytics />
        <ClientPortal />
        <Automation />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
