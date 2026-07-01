import { ReactNode } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FeatureList from "./FeatureList";

interface FeatureSectionProps {
  id?: string;
  badge: string;
  title: ReactNode;
  description: string;
  features: readonly string[];
  preview: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function FeatureSection({
  id,
  badge,
  title,
  description,
  features,
  preview,
  reverse = false,
}: FeatureSectionProps) {
  const Content = (
    <div>
      <SectionHeader badge={badge} title={title} description={description} />

      <FeatureList items={features} />
    </div>
  );

  return (
    <Section id={id}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {reverse ? (
          <>
            {preview}
            {Content}
          </>
        ) : (
          <>
            {Content}
            {preview}
          </>
        )}
      </div>
    </Section>
  );
}
