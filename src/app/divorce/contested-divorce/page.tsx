import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Contested Divorce Lawyer | Florida Trial Counsel",
  description:
    "Jacksonville contested-divorce attorney with 25+ years of courtroom experience. Discovery, mediation, and trial representation in Duval, Clay, St. Johns, and Nassau counties.",
  alternates: { canonical: "/divorce/contested-divorce" },
};

export default function ContestedDivorcePage() {
  return (
    <InnerPage
      title="Jacksonville Contested Divorce Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Contested Divorce" },
      ]}
    >
      <p>
        A contested divorce is any dissolution where the spouses cannot
        agree on one or more issues &mdash; property division, alimony,
        child support, time-sharing, valuation of a business, or who gets
        the house. When the parties cannot reach agreement themselves or in
        mediation, a judge decides. Contested divorces are longer, more
        expensive, and harder on everyone involved, so I always look for
        settlement opportunities first &mdash; but when litigation is
        necessary, I have the trial experience to protect your interests.
      </p>

      <h2>Your First Consultation and Preparing for a Contested Divorce</h2>
      <p>
        Your initial consultation is a focused conversation about where your
        case stands and what needs attention first. We will identify the
        issues you and your spouse agree on, the issues that remain contested,
        and whether negotiation, mediation, or litigation may be the
        appropriate path for each issue. Litigation may be necessary when
        important matters cannot be resolved, but understanding the issues
        early can help you make informed decisions and avoid spending time and
        money on disputes that do not move the case forward.
      </p>

      <h3>What to Bring</h3>
      <ul>
        <li>
          Any petition, answer, counter-petition, court orders, hearing
          notices, or other filed papers you have received.
        </li>
        <li>
          A short list of the issues you believe are unresolved, including
          property, debt, support, parenting, or other concerns.
        </li>
        <li>
          Recent information about income, accounts, real estate, businesses,
          retirement, insurance, and significant debts.
        </li>
        <li>
          Questions about immediate concerns, upcoming deadlines, parenting
          arrangements, and the result you hope to work toward.
        </li>
      </ul>

      <h3>How to Prepare</h3>
      <p>
        Before the consultation, write down upcoming deadlines, hearings,
        immediate concerns, and questions. Gather the records you have, keep
        copies of important communications and financial documents, and avoid
        deleting or altering information that may be relevant to the case. You
        do not need a perfectly organized file before seeking guidance; the
        goal is to identify what information is available and what may be
        needed next.
      </p>

      <p>
        <strong>
          <Link href="/contact">Schedule Your Consultation</Link>
        </strong>{" "}
        to discuss your contested Florida divorce and the next practical
        steps.
      </p>

      <h2>The Contested Divorce Process</h2>
      <ol>
        <li>
          <strong>Petition for Dissolution of Marriage.</strong> The
          petitioner files and has the other spouse served.
        </li>
        <li>
          <strong>Answer &amp; Counter-Petition.</strong> The responding
          spouse files an Answer and often a Counter-Petition setting out
          their own requests.
        </li>
        <li>
          <strong>Mandatory Disclosure.</strong> Each spouse must exchange
          a sworn financial affidavit and the documents required by Florida
          Family Law Rule 12.285 &mdash; tax returns, pay stubs, bank
          statements, retirement statements, and more.
        </li>
        <li>
          <strong>Discovery.</strong> Interrogatories, requests for
          production, requests for admission, subpoenas to third parties,
          and depositions of the other spouse, financial experts, and
          custody evaluators as needed.
        </li>
        <li>
          <strong>Temporary Relief.</strong> Either party can ask the court
          for temporary orders on support, exclusive use of the home, and
          a temporary parenting schedule while the case is pending.
        </li>
        <li>
          <strong>Mediation.</strong> Florida courts require mediation in
          most contested family-law cases before trial. Mediation settles
          a substantial majority of cases.
        </li>
        <li>
          <strong>Pretrial Motions &amp; Case Management.</strong> The
          judge sets deadlines, resolves discovery disputes, and narrows
          issues for trial.
        </li>
        <li>
          <strong>Trial.</strong> Bench trial (no jury) before a family
          court judge. Testimony, exhibits, and closing arguments.
        </li>
        <li>
          <strong>Final Judgment.</strong> The judge issues a written
          ruling resolving every issue.
        </li>
      </ol>

      <h2>Common Contested Issues</h2>
      <ul>
        <li>
          <Link href="/divorce/equitable-distribution">
            Equitable distribution of assets and debts
          </Link>{" "}
          &mdash; especially where a business, premarital asset, or hidden
          account is involved
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony</Link> &mdash; type,
          amount, duration, and whether any alimony is warranted at all
        </li>
        <li>
          <Link href="/divorce/child-support">Child support</Link> and the
          parents&apos; respective incomes
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Time-sharing
          </Link>{" "}
          and parental responsibility
        </li>
        <li>Valuation of businesses, professional practices, pensions, and stock options</li>
        <li>Allegations of domestic violence, substance abuse, or infidelity</li>
        <li>Relocation of a parent with the child</li>
        <li>Dissipation of marital assets in the years before filing</li>
      </ul>

      <h2>How to Keep a Contested Case Under Control</h2>
      <p>
        The biggest mistake I see in contested divorce is letting the case
        run on reflex &mdash; responding to every motion, taking every
        deposition, fighting over every issue regardless of cost. A
        disciplined contested-divorce strategy:
      </p>
      <ul>
        <li>Identify the handful of issues that actually matter and are actually contested.</li>
        <li>Invest in the evidence that moves those issues &mdash; not in discovery that produces nothing useful.</li>
        <li>Keep settlement conversations going in parallel with litigation, because most cases settle before trial anyway.</li>
        <li>Be realistic about outcomes. Judges have broad discretion in family law. Pushing for a result no reasonable judge will order is expensive and counter-productive.</li>
      </ul>

      <h2>Why Choose an Experienced Trial Advocate</h2>
      <p>
        I have handled Florida family-law litigation for over 25 years in
        Duval, Clay, St. Johns, Nassau, and the southern Georgia counties.
        I know the judges, the local rules, and what evidence actually
        carries weight at trial. I also know the limits of litigation
        &mdash; and I will tell you honestly when the right move is to
        settle rather than fight.
      </p>

      <h2>How I Can Help</h2>
      <p>
        Call <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">reach out online</Link>.
      </p>
    </InnerPage>
  );
}
