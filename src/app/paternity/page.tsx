import InnerPage from "../components/InnerPage";
import InlineCTA from "../components/InlineCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Paternity Lawyer | Florida Family Law Attorney",
  description:
    "Jacksonville paternity attorney with 25+ years of experience establishing paternity, parenting plans, and child support under Florida Statutes Chapter 742. Call 904-858-4334.",
  alternates: { canonical: "/paternity" },
};

export default function PaternityPage() {
  return (
    <InnerPage title="Jacksonville Paternity Lawyer" breadcrumbs={[{ label: "Paternity" }]}>
      <p>
        In Florida, paternity is a legal concept, not a biological one. The
        law presumes that a child born to a married couple is the legal
        child of both spouses, regardless of genetics. When parents are
        unmarried, however, the legal father must be <strong>established
        by court order or acknowledged in a specific legal form</strong>{" "}
        before either parent has enforceable rights or obligations.
      </p>

      <h2>Why Establishing Paternity Matters</h2>
      <p>
        Many parents believe that putting a father&apos;s name on the birth
        certificate is enough. In most cases it is not. Under Florida
        Statutes Chapter 742, an unmarried biological father has essentially
        <em> no</em> enforceable rights to time-sharing or decision-making
        until a court formally adjudicates him the legal father &mdash;
        even if he signed the birth certificate and has been involved with
        the child from day one.
      </p>
      <p>
        Establishing paternity creates the legal foundation for:
      </p>
      <ul>
        <li>Enforceable <Link href="/parenting-plans/">time-sharing and a parenting plan</Link></li>
        <li><Link href="/divorce/child-support">Child support</Link> obligations</li>
        <li>The child&apos;s right to inherit from the father</li>
        <li>The child&apos;s right to Social Security, veterans&apos;, and other benefits through the father</li>
        <li>Access to the father&apos;s medical history</li>
        <li>Health-insurance coverage through the father&apos;s employer</li>
        <li>The father&apos;s consent being required for adoption or name change</li>
      </ul>
      <p>
        Estimate your potential obligation ahead of time with the{" "}
        <Link href="/florida-child-support-calculator/">free Florida Child Support Calculator</Link>.
      </p>

      <InlineCTA
        title="Start or respond to a paternity case"
        subtitle="Whether you are a mother seeking support or a father establishing time-sharing, acting early preserves your rights and saves money."
      />

      <h2>Three Ways to Establish Paternity in Florida</h2>
      <p>There are three legally recognized ways:</p>
      <ol>
        <li>
          <strong>Marriage.</strong> If the parents marry after the child is
          born, paternity is automatically established (subject to certain
          exceptions).
        </li>
        <li>
          <strong>Voluntary Acknowledgment of Paternity.</strong> Both
          parents sign a form at the hospital or later through the Florida
          Department of Health. The form becomes binding after 60 days and
          creates legal paternity without any court involvement.
        </li>
        <li>
          <strong>Court order.</strong> A paternity action is filed in
          circuit court. The court either accepts the parties&apos;
          agreement or orders DNA testing, and then enters a judgment
          establishing paternity.
        </li>
      </ol>

      <h2>How a Contested Paternity Case Works</h2>
      <p>
        A paternity case typically moves through these steps:
      </p>
      <ol>
        <li>
          A Petition to Determine Paternity is filed by either parent (or
          the Florida Department of Revenue).
        </li>
        <li>
          The other parent is served and has 20 days to answer. The answer
          admits or denies paternity.
        </li>
        <li>
          If paternity is disputed, the court orders a scientifically
          reliable DNA test. Florida requires a 95% probability of paternity
          (the test threshold is well above that).
        </li>
        <li>
          If the test confirms paternity (or if both parties agree), the
          court enters a judgment. The same judgment addresses time-sharing,
          a parenting plan, child support, and payment of back-support.
        </li>
      </ol>

      <h2>Common Paternity Scenarios</h2>
      <ul>
        <li>
          <strong>Mother seeking support.</strong> A mother can file to
          have the alleged father adjudicated and child support ordered,
          including back-support for the time before the case was filed.
        </li>
        <li>
          <strong>Father seeking time-sharing.</strong> A father who has
          been prevented from seeing his child can file to establish
          paternity and obtain an enforceable parenting plan.
        </li>
        <li>
          <strong>Disestablishment.</strong> A man who has been paying
          support but learns he is not the biological father can petition to
          disestablish paternity under strict statutory conditions.{" "}
          <Link href="/i-was-served-with-child-support-papers-i-am-not-the-father-what-should-i-do">
            Learn what to do if you&apos;ve been served with child support papers
          </Link>{" "}
          (if you believe you are not the father).
        </li>
        <li>
          <strong>Married but biological father is someone else.</strong>{" "}
          When the presumed father (the husband) and the biological father
          are different, the biological father has very narrow legal options
          in Florida. This is highly fact-specific and requires careful
          analysis.
        </li>
      </ul>

      <h2>Rights &amp; Obligations After Establishment</h2>
      <p>
        Once paternity is established, both parents share identical legal
        rights and responsibilities:
      </p>
      <ul>
        <li>Time-sharing under a court-approved parenting plan (typically now subject to Florida&apos;s 50/50 presumption)</li>
        <li>Shared parental responsibility for major decisions &mdash; unless the court orders sole responsibility</li>
        <li>Child support calculated under Florida&apos;s guidelines (§61.30)</li>
        <li>Responsibility for health insurance, educational expenses, and uncovered medical costs</li>
        <li>Rights around relocation and out-of-state travel with the child</li>
      </ul>

      <h2>Time Limits</h2>
      <p>
        There is no statute of limitations on filing a Florida paternity
        action; it can generally be brought any time before the child turns
        18. But waiting has practical consequences: memories fade, people
        move, and child support typically cannot be recovered for periods
        before the petition is filed.
      </p>

      <h2>How I Can Help</h2>
      <p>
        I have spent over 25 years handling Florida paternity cases &mdash;
        on both sides. I can help you establish paternity, negotiate a
        parenting plan and support order, contest or confirm paternity with
        DNA testing, or address the rare but complicated cases where the
        biological and legal fathers are different. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link> to schedule a
        consultation.
      </p>
    </InnerPage>
  );
}
