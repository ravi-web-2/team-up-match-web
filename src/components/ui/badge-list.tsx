
import { Badge } from "@/components/ui/badge";

interface BadgeListProps {
  items: string[];
  variant?: "default" | "secondary" | "outline" | "destructive";
  className?: string;
}

export function BadgeList({ items, variant = "default", className = "" }: BadgeListProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item, index) => (
        <Badge key={index} variant={variant}>
          {item}
        </Badge>
      ))}
    </div>
  );
}
