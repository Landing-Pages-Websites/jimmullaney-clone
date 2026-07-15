import InnerPage from "../../components/InnerPage";
import InlineCTA from "../../components/InlineCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divorce Mediation Jacksonville: Certified Attorney & Mediator",
  description:
    "Jacksonville divorce mediation from a certified attorney-mediator. Save 91.5% on average vs. litigated divorce. Florida Supreme Court\u2013certified.",
  alternates: { canonical: "/divorce/divorce-mediation-in-jacksonville" },
  openGraph: {
    title: "Divorce Mediation Jacksonville: Certified Attorney & Mediator",
    description:
      "Jacksonville divorce mediation from a certified attorney-mediator. Save 91.5% on average vs. litigated divorce. Florida Supreme Court\u2013certified.",
    url: "/divorce/divorce-mediation-in-jacksonville",
  },
};

export default function MediationPage() {
  return (
    <InnerPage
      title="Jacksonville Divorce Mediation Attorney"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Mediation" },
      ]}
    >
      <p>
        Mediation is a structured negotiation process in which a neutral
        third party &mdash; the mediator &mdash; helps divorcing spouses
        reach agreement on the issues in their case. I am a Florida Supreme
        Court&ndash;certified family court mediator, and mediation is one of
        the two main focuses of my Jacksonville practice. I can serve as
        your neutral mediator, or I can represent you as an advocate in
        mediation with a different mediator.
      </p>

      <h2>Why Mediation Is Usually the Right First Step</h2>
      <p>
        Florida courts require most family-law cases to attend mediation
        before trial. There is a reason for that requirement: mediation
        works. Nationally, 70 to 80 percent of family-law mediations result
        in a complete or partial settlement. Even when mediation does not
        fully resolve a case, it almost always narrows the issues and saves
        money at trial.
      </p>

      <p>The benefits, compared to contested litigation, are substantial:</p>
      <ul>
        <li>
          <strong>Cost:</strong> A full-day mediation typically costs each
          party a few hundred to a few thousand dollars &mdash; a fraction
          of what contested litigation costs.
        </li>
        <li>
          <strong>Speed:</strong> Mediation can be scheduled within weeks
          and wraps up in a single day or two. Contested cases drag on for
          a year or more.
        </li>
        <li>
          <strong>Privacy:</strong> Mediation communications are
          confidential under Florida Statutes §44.405. Nothing said in
          mediation can be used against you later.
        </li>
        <li>
          <strong>Control:</strong> You and your spouse make the decisions.
          If you cannot agree in mediation, a judge who knows almost
          nothing about your family will decide for you.
        </li>
        <li>
          <strong>Relationships:</strong> Especially important for
          co-parents, mediation preserves the ability to communicate after
          the case closes.
        </li>
        <li>
          <strong>Flexibility:</strong> Mediated agreements can include
          creative, tailored solutions a judge cannot order.
        </li>
      </ul>

      <InlineCTA
        title="Book a mediation or a consultation"
        subtitle="Florida Supreme Court–certified family court mediator. 25+ years of experience helping Jacksonville families resolve cases outside the courtroom."
      />

      <h2>Issues Mediation Can Address</h2>
      <p>
        Essentially any issue that can be decided by a family-law court can
        be resolved in mediation:
      </p>
      <ul>
        <li>
          <Link href="/divorce/equitable-distribution">
            Equitable distribution of marital property and debts
          </Link>
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony — type, amount, duration</Link>
        </li>
        <li>
          <Link href="/divorce/child-support">Child support</Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Time-sharing schedules and parenting plans
          </Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida/relocations">
            Parental relocation
          </Link>
        </li>
        <li>Post-judgment modifications of any of the above</li>
        <li>Valuation and division of businesses</li>
        <li>Treatment of retirement accounts and pensions</li>
      </ul>

      <h2>How a Mediation Session Works</h2>
      <p>
        A typical Jacksonville family-law mediation runs half a day to a
        full day. Each side and their attorney (if represented) work in
        separate rooms. The mediator shuttles back and forth, exploring
        positions, identifying priorities, and helping each side understand
        the other&apos;s concerns. When agreement is reached, the mediator
        drafts a Mediated Settlement Agreement that both parties sign. The
        agreement is filed with the court and made part of the final
        judgment.
      </p>

      <h2>Mediation Before Litigation Even Starts</h2>
      <p>
        You do not need to have a pending court case to mediate. I
        frequently help couples mediate and finalize their divorce without
        ever filing a contested petition &mdash; effectively turning what
        might have been a contested case into an{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
          uncontested divorce
        </Link>
        . This is the fastest, cheapest, and least stressful route for
        families who think they might have disagreements but are willing to
        try to resolve them with help.
      </p>

      <h2>Collaborative Divorce: A Related Alternative</h2>
      <p>
        If you and your spouse want a structured out-of-court process but
        need more than a one-day mediation,{" "}
        <Link href="/divorce/collaborative-divorce">collaborative divorce</Link>{" "}
        offers a more comprehensive team-based approach.
      </p>

      <h2>My Mediator Credentials</h2>
      <ul>
        <li>Florida Supreme Court&ndash;certified family court mediator</li>
        <li>Florida Supreme Court appellate mediator</li>
        <li>Member, The Florida Bar (since 1996)</li>
        <li>Member, State Bar of Georgia</li>
        <li>25+ years practicing family law exclusively</li>
      </ul>

      <h2>Related Practice Areas</h2>
      <ul>
        <li>
          <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
            Uncontested Divorce in Jacksonville
          </Link>
        </li>
        <li>
          <Link href="/divorce/collaborative-divorce">
            Collaborative Divorce
          </Link>
        </li>
        <li>
          <Link href="/divorce/contested-divorce">Contested Divorce</Link>
        </li>
      </ul>

      <p>
        To schedule a mediation or discuss representation in mediation, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
