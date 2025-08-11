"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { cn } from "@/lib/utils";

type SheetContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SheetContext = React.createContext<SheetContextType | null>(null);

type SheetRootProps = {
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
  children: React.ReactNode;
};

function Sheet({ open, onOpenChange, children }: SheetRootProps) {
  const [isOpen, setIsOpen] = React.useState(Boolean(open));

  React.useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const setOpen = React.useCallback(
    (v: boolean) => {
      if (onOpenChange) onOpenChange(v);
      if (open === undefined) setIsOpen(v);
    },
    [onOpenChange, open]
  );

  return (
    <SheetContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

type TriggerProps = React.HTMLAttributes<HTMLElement> & { asChild?: boolean; children: React.ReactElement };

function SheetTrigger({ asChild = false, children, ...rest }: TriggerProps) {
  const ctx = React.useContext(SheetContext)!;
  const onClick = () => ctx.setOpen(true);
  if (asChild) return React.cloneElement(children, { onClick, ...rest });
  return (
    <button type="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

function SheetClose(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(SheetContext)!;
  return (
    <button type="button" onClick={() => ctx.setOpen(false)} {...props} />
  );
}

function SheetPortal({ children }: { children: React.ReactNode }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
}

const SheetOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
);
SheetOverlay.displayName = "SheetOverlay";

type SheetContentProps = {
  side?: "right" | "left";
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const ctx = React.useContext(SheetContext)!;
    if (!ctx.open) return null;
    return (
      <SheetPortal>
        <SheetOverlay onClick={() => ctx.setOpen(false)} />
        <div
          ref={ref}
          className={cn(
            "fixed z-50 grid gap-4 bg-background p-0 shadow-lg transition-all",
            side === "right"
              ? "inset-y-0 right-0 h-full w-[420px] border-l animate-in slide-in-from-right"
              : "inset-y-0 left-0 h-full w-[420px] border-r animate-in slide-in-from-left",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </SheetPortal>
    );
  }
);
SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center justify-between border-b px-6 py-4", className)} {...props} />;
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-base font-semibold", className)} {...props} />;
}

function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

function SheetCloseButton() {
  return (
    <SheetClose className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:bg-muted">
      <span aria-hidden className="block h-5 w-5 text-xl leading-none">×</span>
      <span className="sr-only">Close</span>
    </SheetClose>
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetCloseButton,
};


