import InnerPage from "../components/InnerPage";
import InlineCTA from "../components/InlineCTA";
import CalconicEmbed from "../components/CalconicEmbed";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "A Free 2026 Florida Child Support Calculator | Jacksonville Family Law",
  description:
    "Estimate your Florida child support obligation with the same Calconic-powered calculator used on the live site. Based on Florida Statutes §61.30 guidelines.",
  alternates: { canonical: "/florida-child-support-calculator" },
};

/** The firm's Calconic calculator ID (pulled from the live site embed). */
const CALCULATOR_ID = "5d30a3c5d25e57001e57c9f7";

/** WebApplication + SoftwareApplication schema describing the calculator tool. */
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "SoftwareApplication"],
  name: "Florida Child Support Calculator",
  description:
    "A free online calculator that estimates Florida child support obligations under Florida Statutes §61.30 guidelines. Uses the Income Shares Model with gross income inputs, tax estimates, and the gross-up formula for shared parenting.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript",
  author: {
    "@type": "Person",
    name: "A. James Mullaney",
    url: "https://www.jimmullaney.com/attorney/mullaney-a-james",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to use. Optional $20 fee for a formal Guidelines Worksheet.",
  },
  about: {
    "@type": "Thing",
    name: "Florida Child Support",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Florida parents seeking child support estimates",
  },
};

/** FAQPage schema answering common questions about Florida child support calculations. */
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is child support calculated in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida uses the Income Shares Model under Florida Statutes 61.30. Each parent's gross monthly income is entered, federal tax and FICA are estimated, and allowable deductions (health insurance, child care, union dues, mandatory retirement, existing court-ordered support) are subtracted to determine net monthly income. Combined net income and the number of children determine the minimum monthly need from the Florida schedule. Each parent's share equals their percentage of combined net income.",
      },
    },
    {
      "@type": "Question",
      name: "What is the gross-up formula in Florida child support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Florida Statutes 61.30(11)(b), if both parents have at least 20 percent of the overnights (73 or more nights per year), the minimum monthly need is multiplied by 1.5, and each parent receives a credit for the time they spend with the child. This formula significantly reduces the monthly obligation for the paying parent in shared-parenting arrangements.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most online child support calculators produce inaccurate results for Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two problems cause most errors. First, many online calculators ask for net income, but most people cannot estimate their net income accurately -- the Florida court program starts from gross income. Second, many calculators fail to account for overnights. Under Florida's current law, the majority of paying parents have 20 percent or more overnights, which triggers the gross-up formula and significantly changes the obligation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Florida Child Support Guidelines Worksheet cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The calculator is free to use online. If you need a formal Child Support Guidelines Worksheet for court or mediation, the fee is $20. The worksheet is created manually and is the same type used by courts and mediators. Payment is processed through LawPay.",
      },
    },
    {
      "@type": "Question",
      name: "What information do I need to use the Florida child support calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will need each parent's monthly gross income, filing status for tax purposes, health insurance costs, child care expenses, union dues or mandatory retirement contributions, any existing court-ordered support obligations, and the number of overnights each parent has with the child (at least 73 nights per year may trigger the shared-parenting gross-up formula).",
      },
    },
  ],
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqPageSchema} />
      <InnerPage
      title="A Free 2026 Florida Child Support Calculator"
      breadcrumbs={[{ label: "Child Support Calculator" }]}
      showSidebar={false}
    >
      <p>Last updated on December 30, 2025</p>

      <p>
        Most online Florida child-support calculators fail to predict what a
        judge will actually order. Two problems cause most of the error.
        First, online calculators typically ask for <strong>net</strong>{" "}
        income &mdash; but almost no one can estimate their own net correctly,
        and the program judges use starts from <strong>gross</strong>. Second,
        many calculators fail to account for overnights. Under Florida&apos;s
        current law (and the 2023 equal time-sharing presumption), the
        majority of paying parents have 20% or more of the overnights, which
        triggers the gross-up formula and significantly reduces the monthly
        obligation.
      </p>

      <p>
        This calculator is based on the 2026 federal tax code and the Florida
        Child Support Guidelines (§61.30). It asks for gross income, applies
        filing-status-appropriate standard deductions, estimates FICA and
        federal tax the way the court program does, and implements the
        §61.30(11)(b) gross-up formula automatically. Results are estimates;
        for a binding calculation for your case, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a>.
      </p>

      <p>
        For personalized guidance on how your specific situation affects support,{" "}
        contact a{" "}
        <Link href="/divorce/child-support/">Jacksonville Child Support Attorney</Link>.
      </p>

      {/* Calconic calculator embed — the same one that powers the live site */}
      <div className="not-prose my-12">
        <CalconicEmbed calculatorId={CALCULATOR_ID} />
      </div>

      <InlineCTA
        title="Need a Florida Child Support Guidelines Worksheet?"
        subtitle="For a binding calculation that matches what a judge will order, call for a consultation or order a formal Guidelines Worksheet."
      />

      <h2>How the Calculator Works</h2>
      <p>
        Florida applies the <strong>Income Shares Model</strong> to determine
        child support. Step by step:
      </p>
      <ol>
        <li>Each parent&apos;s monthly <strong>gross</strong> income is entered.</li>
        <li>
          Federal income tax is estimated from filing status and the 2026
          standard deduction, then FICA (Social Security + Medicare) is
          subtracted.
        </li>
        <li>
          Allowable monthly deductions are applied: health insurance for the
          parent, child care, union dues, mandatory retirement contributions,
          and any existing court-ordered support.
        </li>
        <li>The result is each parent&apos;s <strong>net monthly income</strong>.</li>
        <li>
          Combined net income and the number of children are used to look up
          the <strong>minimum monthly need</strong> in the Florida schedule
          (§61.30(6)).
        </li>
        <li>
          Each parent&apos;s share of that need equals their percentage of
          combined net income.
        </li>
        <li>
          If both parents have at least 20% of the overnights (73+ nights),
          Florida&apos;s <strong>gross-up formula</strong> under §61.30(11)(b)
          multiplies the need by 1.5 and credits each parent for time with the
          child.
        </li>
      </ol>

      <p>
        For a line-by-line walkthrough of the actual court worksheet, see{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
        .
      </p>

      <h2>Order a Child Support Guidelines Worksheet &mdash; $20</h2>
      <p>
        If you would like a Child Support Guidelines Worksheet &mdash; the
        kind used in court and in mediations &mdash; please submit your
        calculation via the email link in the calculator above, and then{" "}
        <a
          href="https://secure.lawpay.com/pages/ajamesmullaney/operating"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>{" "}
        to pay the $20 fee. The worksheet is created manually, so allow a few
        hours to receive it.
      </p>
      <p>
        Submitting your information or paying for a worksheet does not create
        an attorney-client relationship.
      </p>

      <p>
        Child support obligations are closely tied to time-sharing arrangements.{" "}
        See <Link href="/parenting-plans/">Parenting Plans &amp; Time-Sharing</Link>{" "}
        for more information.
      </p>

      <h2>Talk to a Jacksonville Child Support Lawyer</h2>
      <p>
        If you need a formal Guidelines Worksheet for court or mediation, or
        want to discuss how overnights, imputed income, or health-insurance
        allocations could change your number, I can help. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">send me a message</Link>.
      </p>
    </InnerPage>
    </>
  );
}
