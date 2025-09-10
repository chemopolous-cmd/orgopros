"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Sends GA4 page_view on initial load and every route change.
 * Does NOT use useSearchParams (avoids Suspense requirement).
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    const path = pathname || "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    const page_path = search ? `${path}${search}` : path;

    window.gtag("event", "page_view", {
      page_path,
      page_location: typeof window !== "undefined" ? window.location.href : undefined,
      page_title: typeof document !== "undefined" ? document.title : undefined,
    });
  }, [pathname]);

  return null;
}
