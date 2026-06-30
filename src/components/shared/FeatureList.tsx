import FeatureItem from "./FeatureItem";

interface FeatureListProps {
  items: string[];
}

export default function FeatureList({ items }: FeatureListProps) {
  return (
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <FeatureItem key={item}>{item}</FeatureItem>
      ))}
    </div>
  );
}
