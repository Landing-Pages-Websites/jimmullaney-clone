import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Jacksonville - Law Office of A. James Mullaney",
  description:
    "Family law insights from the Law Office of A. James Mullaney in Jacksonville, FL.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) =>
    (b.year + b.month).localeCompare(a.year + a.month),
  );

  return (
    <InnerPage title="Blog" breadcrumbs={[{ label: "Blog" }]}>
      <div className="space-y-8">
        {sorted.map((post) => {
          const href = `/blog/${post.year}/${post.month}/${post.slug}`;
          return (
            <article
              key={href}
              className="pb-8 border-b border-gray-200 last:border-b-0"
            >
              <h2 style={{ borderBottom: "none", marginTop: 0 }}>
                <Link href={href}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500 italic">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <Link
                href={href}
                className="inline-block mt-2 text-[#8B2635] font-semibold"
              >
                Read more &rarr;
              </Link>
            </article>
          );
        })}
      </div>
    </InnerPage>
  );
}
