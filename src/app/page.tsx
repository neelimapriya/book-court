import { CreateActivitySheet } from "@/components/create-activity-sheet";
import { Sidebar } from "@/components/sidebar";
import { TopbarRight } from "@/components/topbar-user";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <div className="mx-auto flex max-w-[1440px] gap-0">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-semibold text-emerald-900">Bookings</h1>
              <div className="flex flex-col items-end gap-3">
                <TopbarRight />
                <CreateActivitySheet />
              </div>
            </div>
            <div className="mt-8 h-[540px] rounded-md border border-dashed" />
          </div>
        </main>
      </div>
    </div>
  );
}
