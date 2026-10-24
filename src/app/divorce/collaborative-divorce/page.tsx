import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Collaborative Divorce Lawyer | Florida Family Law",
  description:
    "Collaborative divorce in Jacksonville with a certified family-law mediator. A structured, private, out-of-court process for families who want to resolve divorce cooperatively.",
  alternates: { canonical: "/divorce/collaborative-divorce" },
};

export default function CollaborativeDivorcePage() {
  return (
    <InnerPage
      title="Jacksonville Collaborative Divorce Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Collaborative Divorce" },
      ]}
    >
      <p>
        Collaborative divorce is a structured alternative-dispute-resolution
        process formally recognized by Florida&apos;s Collaborative Law
        Process Act (§61.55 et seq.). Both spouses and their attorneys
        commit in writing to resolving the divorce without going to court,
        and a team of neutral professionals helps the family work through
        the financial, emotional, and parenting issues.
      </p>

      <h2>How Collaborative Divorce Differs From Mediation</h2>
      <p>
        <Link href="/divorce/divorce-mediation-in-jacksonville">Mediation</Link>{" "}
        is a single-day (or multi-day) negotiation with a neutral mediator
        shuttling between parties. Collaborative divorce is longer and more
        structured &mdash; typically a series of four-way meetings over
        several months, supported by a multi-disciplinary team. Think of
        mediation as a sprint and collaborative as a guided marathon.
      </p>

      <h2>How the Process Works</h2>
      <ol>
        <li>
          <strong>Participation Agreement.</strong> Both spouses and both
          attorneys sign a written agreement committing to resolve the case
          collaboratively. If the process fails and either spouse wants to
          litigate, <em>both attorneys must withdraw</em>. This is the
          single most important feature of collaborative divorce: it aligns
          everyone&apos;s incentives toward settlement.
        </li>
        <li>
          <strong>The Team.</strong> In addition to the two attorneys, a
          typical Florida collaborative case includes a neutral financial
          professional (often a CPA or certified divorce financial analyst)
          and a mental-health professional who serves as a communications
          facilitator. When children are involved, a child specialist may
          also join.
        </li>
        <li>
          <strong>Full Disclosure.</strong> Both parties voluntarily provide
          complete financial information. No subpoenas, no depositions, no
          discovery battles.
        </li>
        <li>
          <strong>Series of Four-Way Meetings.</strong> The attorneys, the
          clients, and relevant team members meet together to identify
          goals, review financial information, discuss options, and
          negotiate agreements on each issue.
        </li>
        <li>
          <strong>Written Settlement Agreement.</strong> Once all issues
          are resolved, the attorneys draft a marital settlement agreement
          and parenting plan incorporating the decisions.
        </li>
        <li>
          <strong>Uncontested Filing.</strong> The divorce is then filed
          as uncontested and typically finalized at a short hearing.
        </li>
      </ol>

      <h2>When Collaborative Divorce Works Best</h2>
      <p>Collaborative is a particularly good fit when:</p>
      <ul>
        <li>Both spouses are committed to a respectful process</li>
        <li>Privacy matters &mdash; trial would create a public record they both want to avoid</li>
        <li>There are children, and the parties will need to co-parent for years</li>
        <li>There are family businesses, closely-held assets, or complex financial structures that benefit from a neutral financial professional</li>
        <li>Emotional dynamics (one spouse leaving, a long marriage ending) need the support of a mental-health facilitator</li>
        <li>One spouse is serving in the military and the family needs to consider <Link href="/divorce/military-divorce/">military-specific divorce issues</Link> alongside the choice of process</li>
      </ul>

      <h2>When Collaborative Is Not the Right Fit</h2>
      <ul>
        <li>History of domestic violence or coercive control</li>
        <li>One spouse is unwilling to be financially transparent</li>
        <li>Urgent need for emergency court orders</li>
        <li>One party is not committed to settlement as the goal</li>
      </ul>

      <h2>Costs vs. Litigation</h2>
      <p>
        Collaborative divorce is usually less expensive than a contested
        trial but more expensive than a straightforward{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
          uncontested divorce
        </Link>
        . The team of professionals costs money, but the savings come from
        avoiding discovery, motion practice, and trial. For high-asset or
        high-complexity cases, collaborative frequently produces the best
        overall value because the neutral professionals are used jointly
        rather than each side paying for their own competing expert.
      </p>

      <h2>How I Can Help</h2>
      <p>
        I am a Florida Supreme Court&ndash;certified family-court mediator
        and participate in collaborative cases in Jacksonville. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link> to discuss whether
        collaborative divorce is a fit for your situation.
      </p>
    </InnerPage>
  );
}
