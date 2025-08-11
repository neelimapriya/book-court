"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M12 3a6 6 0 00-6 6v2.382c0 .53-.211 1.039-.586 1.414L4 14h16l-.828-.828A2 2 0 0118.586 11V9a6 6 0 00-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17a3 3 0 11-6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TopbarRight() {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 p-0 text-emerald-800"
        aria-label="Notifications"
      >
        <BellIcon className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-2 rounded-md border px-3 py-1.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-medium text-emerald-900">
          U
        </div>
        <div className="leading-tight">
          <div className="text-sm font-medium text-emerald-900">User Name</div>
          <div className="text-[11px] text-muted-foreground">User Role</div>
        </div>
        <ChevronIcon className="ml-1 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}


