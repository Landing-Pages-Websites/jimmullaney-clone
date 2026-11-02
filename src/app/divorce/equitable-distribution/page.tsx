import InnerPage from "../../components/InnerPage";
import JsonLd from "../../components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";

const equitableDistributionSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.jimmullaney.com/divorce/equitable-distribution/#service",
      name: "Jacksonville Equitable Distribution Lawyer",
      serviceType: "Equitable Distribution",
      description:
        "Property division in a Florida divorce is called equitable distribution. \u201cEquitable\u201d means fair. It does not always mean perfectly equal, although courts usually begin with the idea that marital assets and marital debts should be divided equally unless there is a legally sufficient reason to do something different.",
      provider: {
        "@id": "https://www.jimmullaney.com/#legal-service",
      },
      url: "https://www.jimmullaney.com/divorce/equitable-distribution/",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jimmullaney.com/divorce/equitable-distribution/#faq",
      url: "https://www.jimmullaney.com/divorce/equitable-distribution/",
      mainEntity: [
        {
          "@type": "Question",
          name: "What Counts as Marital Property in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marital property generally includes assets acquired during the marriage, regardless of whose name is on the title. That can include the marital home, vehicles, bank accounts, retirement benefits earned during the marriage, investment accounts, business interests, furniture, valuable personal property, and other assets accumulated while married. Marital debts are also divided. Credit card balances, mortgages, car loans, tax debts, business obligations, and other liabilities may be part of the marital estate if they were incurred during the marriage or for marital purposes.",
          },
        },
        {
          "@type": "Question",
          name: "What Is Nonmarital Property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonmarital property is generally property owned before the marriage, inheritances, gifts from someone other than a spouse, and certain assets protected by a valid agreement. But the label is not always simple. Nonmarital property can become partly marital if it is commingled, retitled jointly, used for marital purposes, or increased in value because of marital labor or marital funds. For example, a house owned before marriage may remain nonmarital in part, but mortgage reduction, renovations paid from marital funds, or active appreciation during the marriage may create a marital component. A business started before marriage may still have marital value if it grew during the marriage because of work performed by either spouse.",
          },
        },
        {
          "@type": "Question",
          name: "Is Property Always Divided 50/50?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Florida courts begin with the premise that equal distribution is usually fair. But a judge may order an unequal distribution after considering statutory factors, including each spouse’s contributions to the marriage, the economic circumstances of the parties, the length of the marriage, career interruptions, contributions to the other spouse’s career or education, intentional waste of assets, and the desirability of keeping certain assets intact. Unequal distribution is not awarded simply because one spouse is angry or because one spouse earned more money. There must be evidence supporting why a different division is fair under Florida law.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Jacksonville Equitable Distribution Attorney | Florida §61.075",
  description:
    "Jacksonville attorney with 25+ years of experience dividing property, debts, businesses, and retirement accounts in Florida divorces under equitable distribution.",
  alternates: { canonical: "/divorce/equitable-distribution" },
};

export default function EquitableDistributionPage() {
  return (
    <>
      <JsonLd data={equitableDistributionSchema} />
      <InnerPage
        title="Jacksonville Equitable Distribution Attorney"
        breadcrumbs={[
          { label: "Divorce", href: "/divorce" },
          { label: "Equitable Distribution" },
        ]}
      >
      <p>
        Florida is an <strong>equitable distribution</strong> state, not a
        community property state. &ldquo;Equitable&rdquo; means fair &mdash;
        not necessarily equal. Under Florida Statutes §61.075, judges start
        from the presumption that a 50/50 split is fair, then adjust based on
        statutory factors. In practice, most divorcing couples end up with
        roughly equal distributions, but the exceptions matter &mdash; and
        they can swing the outcome by hundreds of thousands of dollars.
      </p>

      <h2>Marital vs. Non-Marital Property</h2>
      <p>
        Only <strong>marital</strong> property is subject to equitable
        distribution. Distinguishing marital from non-marital is the most
        fundamental step in any Florida divorce and is often where the real
        battle happens.
      </p>
      <ul>
        <li>
          <strong>Marital property</strong> &mdash; assets and debts acquired
          during the marriage, regardless of whose name is on the title. The
          paycheck you earned during the marriage is marital. The house you
          bought together is marital, even if only one spouse is on the deed.
        </li>
        <li>
          <strong>Non-marital property</strong> &mdash; assets owned before
          the marriage, inheritances received individually, gifts to one
          spouse (not from the other spouse), and assets excluded by a valid
          prenuptial or postnuptial agreement. Non-marital property stays
          with the spouse who owns it.
        </li>
        <li>
          <strong>Commingled property</strong> &mdash; non-marital property
          that has been mixed with marital property (inheritance deposited
          into a joint account, premarital house retitled jointly) often
          becomes marital. This is fact-intensive and frequently contested.
        </li>
        <li>
          <strong>Enhanced non-marital property</strong> &mdash; if marital
          efforts or funds increased the value of non-marital property (for
          example, your spouse&apos;s premarital business grew during the
          marriage), the increase in value may be marital even though the
          underlying asset is not.
        </li>
      </ul>

      <h2>Factors the Court Considers</h2>
      <p>
        To justify an unequal distribution, the court looks at:
      </p>
      <ul>
        <li>Contributions to the marriage, including homemaking and child care</li>
        <li>Economic circumstances of each spouse</li>
        <li>The duration of the marriage</li>
        <li>Career or educational interruptions by either spouse</li>
        <li>Contributions to the acquisition, enhancement, or production of income from marital or non-marital assets</li>
        <li>Desirability of retaining the marital home for minor children</li>
        <li>Desirability of retaining an asset intact &mdash; a business, a professional practice</li>
        <li>Intentional dissipation, waste, or destruction of marital assets within 2 years before filing or during the case</li>
      </ul>

      <h2>Dividing Common Assets</h2>

      <h3>The Marital Home</h3>
      <p>
        Most couples cannot afford to keep the home on one income, so the
        home is often sold and proceeds divided. When one spouse wants to
        keep it, they typically must refinance the mortgage into their sole
        name and buy the other spouse out of their equity share.
      </p>

      <h3>Retirement Accounts</h3>
      <p>
        401(k)s, 403(b)s, traditional pensions, and most IRAs are
        &ldquo;qualified plans&rdquo; that require a{" "}
        <strong>Qualified Domestic Relations Order (QDRO)</strong> to
        divide. The QDRO is a separate court order prepared after the final
        judgment. Only the portion of the account that accrued during the
        marriage is marital.
      </p>

      <h3>Businesses</h3>
      <p>
        Family businesses, professional practices, and ownership interests
        in LLCs must be <em>valued</em> before they can be divided. A
        neutral forensic accountant typically prepares a valuation based on
        earnings, assets, and comparable sales. Enterprise goodwill is
        usually marital; personal goodwill may or may not be, depending on
        the facts.
      </p>

      <h3>Stock Options &amp; RSUs</h3>
      <p>
        Unvested equity grants are treated differently depending on whether
        they are deferred compensation for past work (marital) or incentive
        for future work (non-marital). The Florida &ldquo;time rule&rdquo;
        fraction is commonly used to apportion partially-vested grants.
      </p>

      <h3>Debts</h3>
      <p>
        Marital debt is divided alongside marital assets. A court&apos;s
        order divides responsibility <em>between the spouses</em>, but the
        creditors are not bound &mdash; if a spouse stops paying, the other
        spouse can still be pursued by the creditor and may have to seek
        contempt or contribution after the fact.
      </p>

      <h2>Valuation Dates</h2>
      <p>
        Florida courts have discretion to choose the valuation date.
        Typically, the valuation date is the date of filing, but for
        liquid investments it is often the date closest to trial. This
        matters when markets move significantly between filing and final
        judgment.
      </p>

      <h2>Prenuptial &amp; Postnuptial Agreements</h2>
      <p>
        A valid{" "}
        <Link href="/prenuptial-agreements">prenuptial agreement</Link>{" "}
        (or postnuptial) can override Florida&apos;s equitable-distribution
        rules and specify exactly how assets and debts will be divided. An
        enforceable agreement requires full financial disclosure,
        independent counsel, and substantive fairness.
      </p>

      <h2>Mediation and Settlement</h2>
      <p>
        Most property-division issues resolve in{" "}
        <Link href="/divorce/divorce-mediation-in-jacksonville">mediation</Link>{" "}
        rather than trial. Judges in Jacksonville expect parties to try
        mediation first, and a well-prepared mediation usually produces a
        better outcome than letting a judge decide &mdash; because you keep
        control of the specific trade-offs.
      </p>

      <h2>How I Can Help</h2>
      <p>
        Property division in a high-asset Florida divorce is where
        experience pays off. I have spent more than 25 years handling
        equitable distribution for Jacksonville clients, including complex
        estates involving businesses, QDROs, pre-marital property, and
        out-of-state assets. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
      </InnerPage>
    </>
  );
}
