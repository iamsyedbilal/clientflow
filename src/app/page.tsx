import Navbar from "@/components/marketing/navbar/Navbar";
import Hero from "@/components/marketing/hero/Hero";
import ClientCRM from "@/components/Features/ClientCRM/ClientCRM";
import ProjectManagement from "@/components/Features/Project Management/ProjectManagement";
import Invoicing from "@/components/Features/Invoicing/Invoicing";
import Analytics from "@/components/Features/Analytics/Analytics";

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
      </main>
    </>
  );
}
