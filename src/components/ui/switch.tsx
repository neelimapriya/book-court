"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(Boolean(checked));

    React.useEffect(() => {
      if (checked !== undefined) setIsChecked(checked);
    }, [checked]);

    const toggle = () => {
      const next = !isChecked;
      if (onCheckedChange) onCheckedChange(next);
      if (checked === undefined) setIsChecked(next);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={toggle}
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          isChecked ? "bg-emerald-600" : "bg-input",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
            isChecked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };


