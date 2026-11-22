import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface CTAProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function CTA({ children, href = "#visitanos", className = "" }: CTAProps) {
  return (
    <Button
      asChild
      className={`
        bg-[#7D5836]
        hover:bg-[#69492C]
        text-white
        rounded-xl
        px-8 h-13
        text-base md:text-lg
        font-bold
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 active:translate-y-0
        ${className}
      `}
    >
      <a href={href} className="inline-flex items-center justify-center gap-2.5">
        <span>{children}</span>
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
      </a>
    </Button>
  );
}
