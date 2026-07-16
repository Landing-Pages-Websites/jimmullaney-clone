import InnerPage from "../../../../components/InnerPage";
import InlineCTA from "../../../../components/InlineCTA";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, findPost } from "../../../posts";

type Params = { year: string; month: string; slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((p) => ({ year: p.year, month: p.month, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { year, month, slug } = await params;
  const post = findPost(year, month, slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.year}/${post.month}/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { year, month, slug } = await params;
  const post = findPost(year, month, slug);

  if (!post) notFound();

  // Related posts: 3 most-recent posts that aren't this one
  const related = posts
    .filter((p) => p !== post)
    .sort((a, b) => (b.year + b.month).localeCompare(a.year + a.month))
    .slice(0, 3);

  return (
    <InnerPage
      title={post.title}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
    >
      <p className="text-sm text-gray-500 italic mb-6 mt-0">{post.date}</p>

      {post.body.map((paragraph, i) => {
        // Drop an InlineCTA after the 3rd paragraph so readers who scanned
        // the opening have a conversion path before the related-posts list.
        const insertCTAAfter = Math.min(3, Math.floor(post.body.length / 2));
        return (
          <div key={i}>
            <p>{paragraph}</p>
            {i === insertCTAAfter && post.body.length > 4 && (
              <InlineCTA
                title={`Questions about ${post.title.split("?")[0].split(":")[0].trim().slice(0, 70)}?`}
                subtitle="Get a direct, no-pressure answer from a family-law attorney with 25+ years of Florida experience."
              />
            )}
          </div>
        );
      })}

      <InlineCTA />

      <hr className="my-10 border-[#03254B]/15" />

      <h2>Related Posts</h2>
      <ul>
        {related.map((r) => (
          <li key={r.slug}>
            <Link href={`/blog/${r.year}/${r.month}/${r.slug}`}>
              {r.title}
            </Link>{" "}
            <span className="text-gray-500 text-sm">&mdash; {r.date}</span>
          </li>
        ))}
      </ul>

      <p className="mt-10">
        Have questions about your own family-law situation? Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
