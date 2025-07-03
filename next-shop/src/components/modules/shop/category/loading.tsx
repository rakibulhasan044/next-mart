// app/shop/category/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

 // Adjust path based on your setup

export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-1/3" /> {/* heading */}
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  );
}
