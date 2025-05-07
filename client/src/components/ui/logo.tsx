import { cn } from "@/lib/utils";
import shreeLogo from "../../assets/shree-logo.jpg";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  // Add a filter for white version if needed
  const imgFilter = variant === "white" ? "brightness-0 invert" : "";
  
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={shreeLogo} 
        alt="Shree Enterprise Logo" 
        className={cn("h-16 w-auto", imgFilter)} 
      />
    </div>
  );
}
