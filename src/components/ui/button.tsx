"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

function variantClasses(variant: Variant): string {
  switch (variant) {
    case "secondary":
      return "bg-muted text-foreground hover:bg-muted/80";
    case "outline":
      return "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
    case "ghost":
      return "hover:bg-accent hover:text-accent-foreground";
    case "link":
      return "text-primary underline-offset-4 hover:underline";
    default:
      return "bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm";
  }
}

function sizeClasses(size: Size): string {
  switch (size) {
    case "sm":
      return "h-9 rounded-md px-3";
    case "lg":
      return "h-11 rounded-md px-8";
    case "icon":
      return "h-10 w-10";
    default:
      return "h-10 px-4 py-2";
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses(variant),
          sizeClasses(size),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };


