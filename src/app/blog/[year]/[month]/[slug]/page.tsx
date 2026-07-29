import InnerPage from "../../../../components/InnerPage";
import InlineCTA from "../../../../components/InlineCTA";
import Link from "next/link";
import { JsonLd } from "../../../../components/StructuredData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, findPost } from "../../../posts";

// Generate all known blog post pages at build time so Vercel never serves
// a stale ISR prerender 404 fallback. dynamicParams:false means unknown
// slugs correctly 404 instead of falling through to ISR caching.
export const dynamicParams = false;

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

  // Article schema for every blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "A. James Mullaney",
    },
    publisher: {
      "@type": "Organization",
      name: "Law Office of A. James Mullaney",
    },
  };

  // FAQPage schema for posts with a "Frequently Asked Questions" section
  const faqPageSchema = buildFaqSchema(post.body);

  // Related posts: 3 most-recent posts that aren't this one
  const related = posts
    .filter((p) => p !== post)
    .sort((a, b) => (b.year + b.month).localeCompare(a.year + a.month))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqPageSchema && <JsonLd data={faqPageSchema} />}
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
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
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
    </>
  );
}

/**
 * Detect FAQ sections in the blog body and build FAQPage schema.
 * Looks for h3 elements preceded by "Frequently Asked Questions" h2.
 * Returns schema object or null if no FAQ section found.
 */
function buildFaqSchema(body: string[]): Record<string, unknown> | null {
  const faqIndex = body.findIndex(
    (b) =>
      b.toLowerCase().includes("frequently asked questions") ||
      b.toLowerCase().includes("<h2>frequently asked questions"),
  );
  if (faqIndex === -1) return null;

  const mainEntity: Record<string, unknown>[] = [];
  let currentQuestion: string | null = null;

  for (let i = faqIndex + 1; i < body.length; i++) {
    const block = body[i];
    const h3Match = block.match(/<h3>(.*?)<\/h3>/);
    if (h3Match) {
      if (currentQuestion && mainEntity.length > 0) {
        // Previous question had no answer — still add it
      }
      currentQuestion = h3Match[1];
      continue;
    }

    const h2Match = block.match(/<h2>(.*?)<\/h2>/);
    if (h2Match && currentQuestion) break;

    if (currentQuestion) {
      const pMatch = block.match(/<p>(.*?)<\/p>/);
      if (pMatch) {
        const answerText = pMatch[1].replace(/<[^>]+>/g, "").trim();
        mainEntity.push({
          "@type": "Question",
          name: currentQuestion,
          acceptedAnswer: {
            "@type": "Answer",
            text: answerText,
          },
        });
        currentQuestion = null;
      }
    }
  }

  if (mainEntity.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
