"use client";

import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import FAQItem from "./FAQItem";
import { marketingFeatures } from "@/data/marketing";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          align="center"
          badge="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before getting started."
        />

        <div className="mt-14 space-y-4">
          {marketingFeatures.faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
