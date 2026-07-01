import FeatureItem from "./FeatureItem";

interface FeatureListProps {
  items: readonly string[];
}

export default function FeatureList({ items }: FeatureListProps) {
  return (
    <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
      {items.map((item) => (
        <FeatureItem key={item}>{item}</FeatureItem>
      ))}
    </div>
  );
}
