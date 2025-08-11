## Book Court 

Create and manage court bookings. Click “Create Activity” to open a right-side panel (Sheet/Drawer) with the form from the Figma.

Live demo: [book-court-three.vercel.app](https://book-court-three.vercel.app/)

### Quick start
```bash
pnpm install
pnpm run dev
# open http://localhost:3000
```

### What’s inside
- `src/app/page.tsx` – page shell + Create Activity button
- `src/components/create-activity-sheet.tsx` – slide-over with the booking form
- `src/components/sidebar.tsx` – left sidebar
- `src/components/ui/*` – small headless UI primitives (button, input, label, select, switch, separator, sheet)

### Tech
- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Local shadcn-style components




