"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-[120px] flex-col items-center justify-between bg-[#e9e9e9] py-6">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="h-8 w-16 rounded-md bg-emerald-400 text-center text-xs font-semibold text-white leading-8">
          Logo
        </div>

        <nav className="mt-2 w-full px-3">
          <Button
            className="w-full justify-start gap-2 rounded-md bg-emerald-800 px-3 py-2 text-white hover:bg-emerald-900"
          >
            <span className="inline-block h-4 w-4 rounded-sm bg-white/20" aria-hidden />
            <span className="text-sm font-medium">Bookings</span>
          </Button>
        </nav>
      </div>

      <div className="w-full px-3">
        <Button className="w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600 cursor-pointer">
          Logout
        </Button>
      </div>
    </aside>
  );
}


