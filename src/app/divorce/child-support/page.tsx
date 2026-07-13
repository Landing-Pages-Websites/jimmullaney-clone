import InnerPage from "../../components/InnerPage";
import InlineCTA from "../../components/InlineCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Child Support Lawyer | Florida §61.30 Guidelines",
  description:
    "Jacksonville child-support attorney. Calculate, modify, or enforce Florida child support. 25+ years of family-law experience. Free online calculator. Call 904-858-4334.",
  alternates: { canonical: "/divorce/child-support" },
};

export default function ChildSupportPage() {
  return (
    <InnerPage
      title="Jacksonville Child Support Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Child Support" },
      ]}
    >
      <p>
        In Florida, both parents share a legal duty to support their children
        financially. Child support is not optional, and parents cannot
        negotiate it away &mdash; the court must always review the numbers.
        The amount is set by Florida Statutes §61.30 using the <strong>Income
        Shares Model</strong>, which estimates what the family would have
        spent on the child if the parents had remained together, then divides
        that obligation in proportion to each parent&apos;s income.
      </p>

      <h2>How Florida Child Support Is Calculated</h2>
      <p>
        The guideline calculation follows a specific sequence. Small changes
        in any input can produce meaningful changes in support:
      </p>
      <ol>
        <li>
          <strong>Gross monthly income</strong> &mdash; wages, self-employment,
          bonuses, commissions, rental income, interest and dividends,
          unemployment, and recurring gifts.
        </li>
        <li>
          <strong>Allowable deductions</strong> &mdash; federal, state, and
          local taxes, FICA, mandatory union dues, mandatory retirement,
          health insurance for the parent (not the children), court-ordered
          support for other children, and alimony paid.
        </li>
        <li>
          <strong>Net monthly income</strong> = gross minus allowable
          deductions.
        </li>
        <li>
          <strong>Combined net monthly income</strong> &mdash; both
          parents&apos; net income added together.
        </li>
        <li>
          <strong>Each parent&apos;s percentage share</strong> = their net
          income divided by combined net.
        </li>
        <li>
          <strong>Minimum need</strong> &mdash; the combined net income and
          number of children are looked up in the statutory schedule
          (§61.30(6)).
        </li>
        <li>
          <strong>Child-care and health-insurance costs</strong> for the
          children are added to the base obligation and shared by the same
          percentages.
        </li>
        <li>
          <strong>Gross-up for substantial time-sharing</strong> &mdash; if
          each parent has at least 20% (73+) overnights per year, the
          obligation is multiplied by 1.5 and credited for each
          parent&apos;s time with the child. Understanding your{" "}
          <Link href="/parenting-plans/">time-sharing arrangement</Link>{" "}
          is an essential step when creating a parenting plan.
        </li>
      </ol>

      <p>
        Try our free{" "}
        <Link href="/florida-child-support-calculator">
          Florida Child Support Calculator
        </Link>{" "}
        &mdash; it asks for gross income (the way the court program does) and
        applies the gross-up formula automatically. For a line-by-line
        walkthrough, see{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
        .
      </p>

      <InlineCTA
        title="Need a Florida Child Support Guidelines Worksheet?"
        subtitle="For a binding calculation that matches what a judge will order, call for a consultation or use the free calculator on this site."
      />

      <h2>Imputed Income</h2>
      <p>
        A parent cannot dodge child support by being &ldquo;voluntarily
        unemployed&rdquo; or underemployed. If a judge believes a parent is
        earning less than they reasonably could, Florida law allows the court
        to <strong>impute</strong> income based on recent work history,
        occupational qualifications, and prevailing earnings in the
        community. This issue frequently arises during{" "}
        <Link href="/paternity/">paternity establishment</Link> cases.
      </p>

      <h2>Deviation From the Guidelines</h2>
      <p>
        Judges can deviate from the guideline amount by up to 5% without
        written findings. Deviations greater than 5% require written
        findings showing that the guideline would be unjust or inappropriate.
        Common grounds for deviation include extraordinary medical expenses,
        special educational needs, a child&apos;s independent income, or
        specific time-sharing arrangements.
      </p>

      <h2>Modifying a Child Support Order</h2>
      <p>
        Child support can be modified when a substantial change in
        circumstances would produce a guideline amount at least 15% or $50
        different (whichever is greater) from the current order. Common
        triggers:
      </p>
      <ul>
        <li>Significant change in either parent&apos;s income</li>
        <li>Job loss or disability</li>
        <li>Change in overnight time-sharing</li>
        <li>Child reaching majority or emancipation</li>
        <li>New child-related expenses (medical, educational)</li>
      </ul>
      <p>
        Modifications apply from the date the petition is filed, not from
        when the change occurred &mdash; so file promptly.{" "}
        <Link href="/modifications">Learn more about modifications</Link>.
      </p>

      <h2>Enforcing Unpaid Child Support</h2>
      <p>
        Florida offers several enforcement mechanisms if the other parent
        falls behind:
      </p>
      <ul>
        <li>
          <strong>Income Deduction Order (IDO)</strong> &mdash; direct
          withholding from the payor&apos;s paycheck.
        </li>
        <li>
          <strong>Contempt of court</strong> &mdash; fines, makeup payment
          plans, driver&apos;s license suspension, and in egregious cases,
          jail.
        </li>
        <li>Interception of tax refunds and lottery winnings</li>
        <li>Judgments and liens against property</li>
        <li>Passport denial for arrears exceeding statutory thresholds</li>
      </ul>
      <p>
        I can file an enforcement motion or defend against one.{" "}
        <Link href="/contempt">See Contempt &amp; Enforcement</Link>.
      </p>

      <h2>How Alimony Affects Child Support</h2>
      <p>
        Alimony received is treated as gross income to the recipient and
        reduces the payor&apos;s gross income for support purposes. This
        interaction &mdash; plus the effect of overnights &mdash; is why
        alimony and child support should always be negotiated together, not
        sequentially. See <Link href="/divorce/alimony">Alimony</Link>.
      </p>

      <h2>When Does Child Support End?</h2>
      <p>
        In Florida, child support typically continues until the child turns
        18. If the child is still in high school, expected to graduate
        before age 19, and performing as expected, support can continue
        until graduation. Support may also continue indefinitely for a
        child with a physical or mental disability that prevents
        self-support, if the disability manifested before age 18.
      </p>

      <h2>How I Can Help</h2>
      <p>
        Whether you need an initial calculation, a formal Guidelines
        Worksheet for court or mediation, a modification of an existing
        order, or help enforcing unpaid support, I can help. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
