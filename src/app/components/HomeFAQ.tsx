import Link from "next/link";
import JsonLd from "./JsonLd";

/**
 * Seven Florida family-law FAQs optimized for Answer Engine Optimization
 * (AEO) — short, direct, statute-specific answers that LLMs and search
 * engines lift cleanly into featured snippets and AI overviews.
 *
 * Each answer opens with the direct answer in the first 1–2 sentences
 * (the portion most commonly extracted), followed by 1–3 lines of supporting
 * detail. The whole set is also emitted as FAQPage JSON-LD so Google,
 * Bing, and AI assistants index the Q&A pairs.
 */

type FAQ = {
  q: string;
  /** Short plain-text answer for schema (no HTML) */
  aPlain: string;
  /** Rich React body for page display (can include links / emphasis) */
  a: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    q: "How long does a Florida divorce take?",
    aPlain:
      "An uncontested divorce in Florida typically takes 30 to 90 days from filing to final judgment. Florida requires a mandatory 20-day waiting period between filing and the final hearing. Contested divorces — where the spouses disagree on property, support, or parenting — usually take 6 to 18 months or longer.",
    a: (
      <p>
        An uncontested divorce in Florida typically takes{" "}
        <strong>30 to 90 days</strong> from filing to final judgment.
        Florida requires a mandatory 20-day waiting period between the date
        you file and the date the final hearing can be held. Contested
        divorces — where the spouses disagree on property, support, or
        parenting — usually take 6 to 18 months or longer.{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
          Learn more about uncontested divorce
        </Link>
        .
      </p>
    ),
  },
  {
    q: "How is child support calculated in Florida?",
    aPlain:
      "Florida uses the Income Shares Model under Florida Statutes §61.30. The court combines both parents' monthly net incomes, looks up the minimum need in the statutory schedule based on the number of children, and divides it between the parents in proportion to their incomes. When both parents have at least 20% of the overnights (73+ nights per year), a gross-up formula applies.",
    a: (
      <p>
        Florida uses the <strong>Income Shares Model</strong> under Florida
        Statutes §61.30. The court combines both parents&apos; monthly net
        incomes, looks up the minimum monthly need on the statutory schedule
        based on the number of children, and divides that need between the
        parents in proportion to their incomes. When both parents have at
        least 20% of the overnights (73+ nights per year), a{" "}
        <em>gross-up formula</em> applies that multiplies the need by 1.5
        and credits each parent for their time with the child. Try our{" "}
        <Link href="/florida-child-support-calculator">
          free Florida Child Support Calculator
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Is Florida a 50/50 custody state?",
    aPlain:
      "Effective July 1, 2023, Florida law includes a rebuttable presumption that equal (50/50) time-sharing is in the best interest of minor children. A parent seeking a different arrangement must prove by a preponderance of the evidence that equal time-sharing is not in the children's best interest. Florida does not use the term 'custody' — it uses 'time-sharing' and requires a written parenting plan.",
    a: (
      <p>
        Effective July 1, 2023, Florida law includes a{" "}
        <strong>rebuttable presumption that equal (50/50) time-sharing is
        in the best interest of minor children</strong>. A parent who wants
        a different arrangement must prove by a preponderance of the evidence
        that equal time-sharing is not in the children&apos;s best interest.
        Florida no longer uses the term &ldquo;custody&rdquo; — cases use{" "}
        <Link href="/time-sharing-and-visitation-in-florida">
          time-sharing and a written parenting plan
        </Link>{" "}
        approved by the court.
      </p>
    ),
  },
  {
    q: "How do I establish paternity in Florida?",
    aPlain:
      "Florida recognizes three ways to establish paternity: (1) marriage — parents who marry after the birth establish paternity automatically; (2) a signed Voluntary Acknowledgment of Paternity, which becomes binding after 60 days; or (3) a court order entered in a paternity case under Florida Statutes Chapter 742. Putting a father's name on the birth certificate alone does not give him enforceable legal rights.",
    a: (
      <p>
        Florida recognizes three ways to establish paternity:{" "}
        <strong>(1) marriage</strong> — parents who marry after the birth
        establish paternity automatically; <strong>(2) a signed Voluntary
        Acknowledgment of Paternity</strong>, which becomes binding 60 days
        after signing; or <strong>(3) a court order</strong> entered in a
        paternity case under Florida Statutes Chapter 742. Putting a
        father&apos;s name on the birth certificate alone does{" "}
        <em>not</em> give him enforceable legal rights to time-sharing or
        decision-making.{" "}
        <Link href="/paternity">Learn more about Florida paternity</Link>.
      </p>
    ),
  },
  {
    q: "How do I get a domestic violence injunction in Florida?",
    aPlain:
      "You file a sworn petition at the circuit court describing the specific acts that justify protection. No filing fee applies for a §741.30 domestic-violence petition. If the facts show an immediate and present danger, the judge can issue a temporary ex parte injunction the same day, lasting up to 15 days. A full hearing with both parties present typically follows within 15 days to decide whether a final injunction will issue.",
    a: (
      <p>
        You file a <strong>sworn petition</strong> at the circuit court
        describing the specific acts that justify protection. No filing fee
        applies for a §741.30 domestic-violence petition. If the facts show
        an immediate and present danger, the judge can issue a{" "}
        <strong>temporary ex parte injunction</strong> the same day, lasting
        up to 15 days. A full hearing with both parties present typically
        follows within 15 days to decide whether a final injunction will
        issue, and for how long.{" "}
        <Link href="/domestic-violence">
          Learn more about Florida domestic-violence injunctions
        </Link>
        .
      </p>
    ),
  },
  {
    q: "What makes a Florida prenuptial agreement enforceable?",
    aPlain:
      "Under Florida's Uniform Premarital Agreement Act (§61.079), a prenup must be in writing, signed voluntarily by both parties, and supported by full financial disclosure. Each party should have independent counsel, and the agreement must not be unconscionable. Signing too close to the wedding date creates a presumption of duress that courts heavily scrutinize — thirty days minimum before the wedding is a safe benchmark.",
    a: (
      <p>
        Under Florida&apos;s <strong>Uniform Premarital Agreement Act
        (§61.079)</strong>, a prenup must be <strong>in writing, signed
        voluntarily</strong> by both parties, and supported by{" "}
        <strong>full financial disclosure</strong>. Each party should have
        independent counsel, and the agreement must not be unconscionable.
        Signing too close to the wedding creates a presumption of duress that
        courts heavily scrutinize — <em>thirty days minimum</em> before the
        wedding is a safe benchmark; ninety days or more is better.{" "}
        <Link href="/prenuptial-agreements">
          Learn more about Florida prenuptial agreements
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Can I modify my child support or parenting plan in Florida?",
    aPlain:
      "Yes, but the legal standard is strict. Florida requires a substantial, material, and unanticipated change in circumstances. For child support, the change must produce a guideline amount at least 15% or $50 different (whichever is greater) from the current order. Time-sharing modifications face an even higher bar and must also be in the child's best interest. Modifications apply only from the date the petition is filed, so filing promptly matters.",
    a: (
      <p>
        Yes, but the standard is strict. Florida requires a{" "}
        <strong>substantial, material, and unanticipated change in
        circumstances</strong>. For child support, the change must produce
        a guideline amount at least <strong>15% or $50</strong> different
        (whichever is greater) from the current order. Time-sharing
        modifications face an even higher bar and must also be in the
        child&apos;s best interest. Modifications apply{" "}
        <em>only from the date the petition is filed</em>, so filing
        promptly matters.{" "}
        <Link href="/modifications">Learn more about modifications</Link>.
      </p>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.aPlain,
    },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="bg-[#FAF7F2] py-24" aria-labelledby="home-faq-heading">
      <JsonLd data={faqSchema} />
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <p
            className="text-[#8B2635] text-[12px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            Frequently Asked Questions
          </p>
          <h2
            id="home-faq-heading"
            className="text-[#03254B] text-[36px] lg:text-[44px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
          >
            Florida family law, <em className="italic text-[#8B2635]">clearly</em> answered
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-6"
            style={{
              width: 60,
              height: 2,
              background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
            }}
          />
          <p className="text-[#03254B]/75 text-[16px] leading-[1.7]">
            Direct, statute-specific answers to the questions I hear most often
            from Jacksonville clients. For advice tailored to your case, call{" "}
            <a href="tel:+1-904-858-4334" className="text-[#8B2635] underline">
              904-858-4334
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group bg-white border border-[#03254B]/10 hover:border-[#8B2635]/30 transition-colors"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-[#03254B] hover:text-[#8B2635] transition-colors"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                <span className="text-[18px] lg:text-[19px] font-medium pr-4">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-[#03254B]/20 flex items-center justify-center group-open:bg-[#8B2635] group-open:border-[#8B2635] group-open:text-white transition-colors"
                >
                  <svg
                    className="w-3 h-3 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div
                className="px-6 pb-6 pt-0 text-[#03254B]/85 text-[16px] leading-[1.75] border-t border-[#03254B]/5"
                style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
              >
                <div className="pt-4">{f.a}</div>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#03254B]/70 text-[14px] mb-4">
            Have a different question?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-semibold tracking-[2px] text-[13px] px-6 py-3 transition-colors"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            Ask in a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
