"use client";

import { useLayoutEffect, useMemo } from "react";

/**
 * Client-bound JSON-LD emitter. Keeping the script element behind a client
 * boundary prevents Next.js App Router from materializing the same native
 * script once from the server tree and again from the RSC flight payload.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const serialized = useMemo(() => JSON.stringify(data), [data]);

  // Next.js can replay native script elements while hydrating a dynamic RSC
  // route. Keep the server-rendered schema for crawlers, then remove only
  // byte-identical hydrated copies from the browser DOM before paint.
  useLayoutEffect(() => {
    const seen = new Set<string>();
    const scripts = Array.from(
      document.querySelectorAll<HTMLScriptElement>(
        'script[type="application/ld+json"]',
      ),
    );

    for (const script of scripts.reverse()) {
      const key = script.textContent ?? "";
      if (seen.has(key)) {
        script.remove();
      } else {
        seen.add(key);
      }
    }
  }, [serialized]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serialized.replace(/</g, "\\u003c"),
      }}
    />
  );
}
