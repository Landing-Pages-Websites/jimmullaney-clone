"use client";

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
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
