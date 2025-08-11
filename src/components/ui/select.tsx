"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SelectContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
  value?: string;
  label?: string;
  setSelection: (value: string, label: string) => void;
};

const SelectContext = React.createContext<SelectContextValue | null>(null);

type SelectProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
};

function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | undefined>(value);
  const [label, setLabel] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  const setSelection = (v: string, lbl: string) => {
    if (onValueChange) onValueChange(v);
    if (value === undefined) setSelected(v);
    setLabel(lbl);
    setOpen(false);
  };

  return (
    <div className="relative">
      <SelectContext.Provider value={{ open, setOpen, value: selected, label, setSelection }}>
        {children}
      </SelectContext.Provider>
    </div>
  );
}

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const ctx = React.useContext(SelectContext)!;
  const text = ctx.label ?? ctx.value ?? placeholder;
  return <span className={cn(!ctx.value && "text-muted-foreground")}>{text}</span>;
};

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(SelectContext)!;
    return (
      <button
        type="button"
        ref={ref}
        onClick={() => ctx.setOpen(!ctx.open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <span className="opacity-50">▾</span>
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = ({ children }: { children: React.ReactNode }) => {
  const ctx = React.useContext(SelectContext)!;
  if (!ctx.open) return null;
  return (
    <div className="absolute left-0 right-0 z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-background text-foreground shadow-md">
      <div className="max-h-64 overflow-auto p-1">{children}</div>
    </div>
  );
};

const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const ctx = React.useContext(SelectContext)!;
  const active = ctx.value === value;
  const label = typeof children === "string" ? children : String(value);
  return (
    <button
      type="button"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-accent-foreground"
      )}
      onClick={() => ctx.setSelection(value, label)}
    >
      {children}
    </button>
  );
};

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem };


