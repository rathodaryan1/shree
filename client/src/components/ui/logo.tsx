import { cn } from "@/lib/utils";
import { companyInfo } from "@/lib/data";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-primary";
  const subTextColor = variant === "white" ? "text-white/80" : "text-gray-600";
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="mr-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
        <span className="text-primary font-bold text-xl">SE</span>
      </div>
      <div>
        <h1 className={cn("font-roboto font-bold text-xl md:text-2xl", textColor)}>
          {companyInfo.name}
        </h1>
        <p className={cn("text-xs md:text-sm", subTextColor)}>
          {companyInfo.tagline}
        </p>
      </div>
    </div>
  );
}
