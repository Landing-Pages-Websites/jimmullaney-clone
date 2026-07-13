import InnerPage from "../components/InnerPage";
import InlineCTA from "../components/InlineCTA";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Parenting Plans & Time-Sharing Attorney | Florida Family Law",
  description:
    "Jacksonville parenting plan and time-sharing attorney. Understand Florida's 50/50 time-sharing presumption, best-interest factors, and enforceable parenting plans.",
  alternates: { canonical: "/time-sharing-and-visitation-in-florida" },
};

export default function ParentingPlansPage() {
  return (
    <InnerPage
      title="Time-Sharing and Parenting Plans in Florida"
      breadcrumbs={[{ label: "Parenting Plans" }]}
    >
      <p>
        What used to be called &ldquo;custody&rdquo; and
        &ldquo;visitation&rdquo; in Florida is now called{" "}
        <strong>time-sharing</strong>. The change in vocabulary was not just
        cosmetic &mdash; Florida abolished the idea of a &ldquo;primary
        residential parent&rdquo; and instead requires every divorce or
        paternity case involving minor children to have a detailed written{" "}
        <em>parenting plan</em> approved by the court. The parenting plan
        governs how the parents will share time, make decisions, and
        communicate about the children.
      </p>

      <h2>The 2023 Equal Time-Sharing Presumption</h2>
      <p>
        Effective July 1, 2023, Florida law now includes a{" "}
        <strong>rebuttable presumption that equal time-sharing (50/50) is
        in the best interest of minor children</strong>. A parent who wants
        a different arrangement has the burden of proving by a preponderance
        of the evidence that equal time-sharing is not in the children&apos;s
        best interest.
      </p>
      <p>
        In practice, judges still weigh the traditional best-interest
        factors carefully. The presumption changes the starting point but
        not the ultimate test: what arrangement is best for <em>this</em>{" "}
        child, in <em>this</em> family, given <em>these</em> facts.
      </p>

      <h2>What a Parenting Plan Must Contain</h2>
      <p>
        Every Florida parenting plan must address the following at minimum:
      </p>
      <ul>
        <li>
          <strong>A time-sharing schedule</strong> for the regular school
          year, summer, holidays, spring break, and special occasions such as
          birthdays and Mother&apos;s/Father&apos;s Day.
        </li>
        <li>
          <strong>Allocation of parental responsibility</strong> &mdash;
          whether decisions about healthcare, education, religion, and
          discipline will be shared jointly or delegated to one parent.
        </li>
        <li>
          <strong>Address designation</strong> for the purpose of school
          boundary determinations.
        </li>
        <li>
          <strong>Communication rules</strong> &mdash; how parents will
          communicate with each other and with the children.
        </li>
        <li>
          <strong>Transportation</strong> &mdash; who does drop-offs and
          pickups, where, and at what times.
        </li>
        <li>
          <strong>Technology and access</strong> &mdash; the child&apos;s
          rights to phone, video, and text contact with each parent.
        </li>
      </ul>

      <InlineCTA
        title="Negotiating a parenting plan?"
        subtitle="A well-drafted plan prevents years of future disputes. I draft plans that address the scenarios most parents never think about until they become problems."
      />

      <h2>Best-Interest Factors</h2>
      <p>
        Florida Statutes §61.13 enumerates 20 factors judges weigh when
        deciding time-sharing. The most commonly decisive factors include:
      </p>
      <ul>
        <li>
          Each parent&apos;s demonstrated capacity to facilitate and encourage
          a close relationship between the child and the other parent
        </li>
        <li>The division of parenting responsibilities during the marriage</li>
        <li>The mental and physical health of each parent</li>
        <li>The stability and continuity of each proposed home environment</li>
        <li>Moral fitness of each parent</li>
        <li>The child&apos;s preference, if the child is of sufficient age and intelligence</li>
        <li>Each parent&apos;s demonstrated knowledge of the child&apos;s daily needs</li>
        <li>Evidence of domestic violence, abuse, abandonment, or neglect</li>
        <li>Evidence of substance abuse by either parent</li>
        <li>The geographic viability of the plan</li>
      </ul>

      <h2>Shared vs. Sole Parental Responsibility</h2>
      <p>
        Florida&apos;s strong default is <strong>shared parental
        responsibility</strong> &mdash; both parents making major decisions
        together. <strong>Sole parental responsibility</strong> (one parent
        decides) is ordered only when shared responsibility would be
        detrimental to the child. Even then, the disadvantaged parent
        typically still has time-sharing unless safety concerns require
        otherwise.
      </p>
      <p>
        A middle path is also available: shared responsibility with{" "}
        <strong>ultimate decision-making authority</strong> delegated to one
        parent in specific areas (for example, education or medical care).
        Judges increasingly use this option to avoid deadlock while still
        keeping both parents involved.
      </p>

      <h2>Modifying a Parenting Plan</h2>
      <p>
        A parenting plan can be modified when there is a{" "}
        <strong>substantial, material, and unanticipated change in
        circumstances</strong> that makes the existing plan unworkable or
        no longer in the children&apos;s best interest. Common triggers:
      </p>
      <ul>
        <li>One parent&apos;s relocation or intended relocation</li>
        <li>A parent&apos;s remarriage or entry of a new partner into the household</li>
        <li>Significant change in the children&apos;s needs</li>
        <li>A parent&apos;s changed work schedule</li>
        <li>Safety concerns such as substance abuse or domestic violence</li>
      </ul>
      <p>
        <Link href="/modifications">Learn more about modifications</Link>.
      </p>

      <h2>Relocation</h2>
      <p>
        A parent cannot move more than 50 miles away for more than 60
        consecutive days without the other parent&apos;s written consent or
        a court order. Florida&apos;s relocation statute (§61.13001) sets
        specific notice and procedure requirements.{" "}
        <Link href="/time-sharing-and-visitation-in-florida/relocations">
          See Relocations
        </Link>
        .
      </p>

      <h2>Enforcing a Parenting Plan</h2>
      <p>
        When the other parent violates the time-sharing schedule, Florida
        law provides specific remedies: makeup time for the denied parent,
        travel-cost reimbursement, mandatory parenting classes, contempt,
        and in extreme cases modification of the plan itself. See{" "}
        <Link href="/contempt">Contempt &amp; Enforcement</Link>.
      </p>

      <h2>Parenting Plans in Paternity Cases</h2>
      <p>
        Parenting plans are not just for divorce. Every paternity case
        involving a child whose parents are not married also requires an
        approved plan. See <Link href="/paternity">Paternity</Link>.{" "}
        The same case will determine child support under{" "}
        <Link href="/divorce/child-support/">Florida child support guidelines</Link>.
      </p>

      <p>
        Use the{" "}
        <Link href="/florida-child-support-calculator/">free Florida Child Support Calculator</Link>{" "}
        to estimate support obligations alongside your parenting plan.
      </p>

      <h2>How I Can Help</h2>
      <p>
        I have spent more than a quarter century drafting and litigating
        parenting plans for Jacksonville families. I am a Florida Supreme
        Court&ndash;certified family court mediator and prefer to resolve
        time-sharing through{" "}
        <Link href="/divorce/divorce-mediation-in-jacksonville">mediation</Link>{" "}
        whenever possible &mdash; with the ability to litigate when it is
        not. Call <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
