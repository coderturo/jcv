import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface CTAProps {
  children: ReactNode;
  className?: string;
}

export default function CTA({ children, className }: CTAProps) {
  return (
    <Button
      className={`
    bg-[#BA9A7D]/90
    backdrop-blur-sm
        text-white
        rounded-xl
        w-67.25 h-14.75
        text-base md:text-lg
        font-bold
        flex items-center justify-center gap-2
        transition-all duration-300 ease-out

    hover:bg-[#c6a98b]/95
    hover:backdrop-blur-md
    hover:shadow-lg
    hover:-translate-y-0.5

        ${className ?? ""}
      `}
    >
      {children}
      <ArrowRight className="w-6! h-6!" strokeWidth={2} />
    </Button>
  );
}
