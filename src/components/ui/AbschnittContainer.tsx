import { cn } from "@/lib/utils";

interface AbschnittContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function AbschnittContainer({ children, className }: AbschnittContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
