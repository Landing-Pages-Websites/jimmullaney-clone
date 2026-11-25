import InnerPage from "../components/InnerPage";
import JsonLd from "../components/JsonLd";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nassau County Family Law Attorney",
  description:
    "Family law guidance for Nassau County divorce, mediation, parenting plans, child support and related matters from A. James Mullaney.",
  alternates: { canonical: "/nassau-county-family-law/" },
};

const faqItems = [
  {
    question: "Do you handle uncontested divorce for Nassau County couples?",
    answer:
      "Yes. Attorney-assisted uncontested divorce is available for couples who have reached full agreement on the terms of their divorce. The attorney can help prepare the required agreement and filings and guide the case through the final court process.",
  },
  {
    question: "Can mediation address parenting and child support issues?",
    answer:
      "Mediation can address parenting, time-sharing, child support, property, and other issues when both participants can negotiate voluntarily and safely. A mediator helps the participants work toward their own agreement. Mediation is not appropriate for every dispute, so the circumstances should be discussed before choosing that path.",
  },
  {
    question: "Can I meet with the attorney virtually from Nassau County?",
    answer:
      "Many consultations and case meetings can be handled virtually. The appropriate meeting and hearing format depends on the matter, the court, and the stage of the case. Schedule a consultation to discuss what is available for your situation.",
  },
  {
    question: "What happens if my spouse and I cannot reach an agreement?",
    answer:
      "The office also represents clients in contested divorce and other family-law matters when negotiation does not resolve the important issues. Litigation may be necessary in some cases, and the appropriate strategy depends on the facts, goals, and risks involved.",
  },
  {
    question: "How do I get started?",
    answer:
      "To discuss your circumstances and possible next steps, Schedule Your Consultation or call 904-858-4334. Bring any court papers, agreements, or questions that may help explain the issue. The consultation is an opportunity to understand the process before deciding how to proceed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function NassauCountyFamilyLawPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <InnerPage
        title="Nassau County Family Law Attorney"
        breadcrumbs={[{ label: "Nassau County Family Law" }]}
        showSidebar={false}
      >
        <img
          src="https://www.jimmullaney.com/images/og-image.jpg"
          alt="Law Office of A. James Mullaney family law practice"
          className="w-full max-h-[360px] object-cover rounded-sm"
        />

        <p>
          If you are facing divorce, a parenting dispute, child-support questions, or another family-law matter in Nassau County, clear guidance can help you make decisions without adding unnecessary conflict. The Law Office of A. James Mullaney helps people in Nassau County and throughout Northeast Florida understand their options, prepare agreements, and address family-law matters with a practical, settlement-focused approach.
        </p>
        <p>
          A. James Mullaney is a Florida family-law attorney and Florida Supreme Court Certified Family Court Mediator. As a solo practitioner, he works directly with clients throughout their matters. You can meet from Nassau County or schedule a virtual consultation when appropriate, while the Jacksonville office remains available for in-person service.
        </p>

        <h2>Family-law services for Nassau County</h2>
        <p>Family-law needs are different for every family. The office can help with matters such as:</p>
        <ul>
          <li>
            <strong>Divorce:</strong> Attorney-assisted uncontested divorce for couples who have reached full agreement, as well as contested divorce representation when important issues remain unresolved. The practice also handles collaborative divorce, equitable distribution, alimony, and military divorce matters.
          </li>
          <li>
            <strong>Mediation and agreement building:</strong> Mediation can give people a structured setting to work through financial, parenting, and other divorce issues. The goal is to help you understand the decisions in front of you and create an agreement when a negotiated resolution is appropriate.
          </li>
          <li>
            <strong>Parenting plans and time-sharing:</strong> A parenting plan addresses decision-making, schedules, communication, holidays, transportation, and other details that can affect children after separation or divorce. The office can help parents develop or review a plan that fits their circumstances.
          </li>
          <li>
            <strong>Child support and paternity:</strong> Child-support questions often connect to income, overnights, health insurance, and other case-specific facts. The office handles child-support and paternity matters and can help you understand how the numbers and legal responsibilities fit together. You can also use the <Link href="/florida-child-support-calculator/">free Florida Child Support Calculator</Link> as an educational starting point.
          </li>
          <li>
            <strong>Post-judgment and related matters:</strong> Help is available for modifications of prior orders, contempt and enforcement, parental relocation, prenuptial agreements, domestic-violence injunctions, and related family-law concerns.
          </li>
        </ul>

        <h2>A practical path forward</h2>
        <p>
          The first step is understanding what needs to be decided and whether an agreement is possible. During a consultation, we can identify the issues, discuss the available path, and explain what information may be needed. Depending on the circumstances, that path may include:
        </p>
        <ol>
          <li><strong>Clarifying the issues.</strong> We identify the legal, financial, and parenting questions that need attention.</li>
          <li><strong>Choosing an appropriate process.</strong> Uncontested divorce, mediation, collaborative work, or litigation may each fit different circumstances. Mediation is not right for every dispute, particularly when safety or power-imbalance concerns require a different approach.</li>
          <li><strong>Preparing a complete agreement or case strategy.</strong> If agreement is possible, careful drafting can reduce confusion later. If it is not, focused representation can protect your position as the case moves forward.</li>
          <li><strong>Completing the court process.</strong> Filing, hearings, and final orders must follow Florida procedure and the requirements of the court handling the matter.</li>
        </ol>
        <p>
          For general information about Florida family-court resources, the <a href="https://www.flcourts.gov/Services/Family-Courts/self-help-information/self-help-programs">Florida Courts self-help programs page</a> lists available programs, including the Nassau County Judicial Annex. Court self-help information is not a substitute for advice about your specific situation.
        </p>

        <h2>Why work with the Law Office of A. James Mullaney?</h2>
        <p>
          Family law is the focus of this practice. The goal is to provide clear advice, direct attorney involvement, and a cost-conscious alternative to unnecessary litigation when a negotiated solution is realistic. A. James Mullaney has more than 25 years of family-law experience, is licensed in Florida and Georgia, and regularly handles matters connected with Northeast Florida and the surrounding counties.
        </p>
        <p>
          The office is built around a simple promise: you hire the attorney who is working with you. You do not have to explain your family history to a series of different people. You receive guidance about the choices in front of you and support in preparing for the next decision.
        </p>

        <h2>Serving Nassau County and Northeast Florida</h2>
        <p>
          The firm regularly serves clients connected with Nassau County, including matters that require coordination with the local court system. The Jacksonville office is located at 8777 San Jose Blvd., Suite 302, Jacksonville, Florida 32217. Many meetings can be held virtually, and the firm can handle matters across Florida through remote services when appropriate. Court appearances and filing requirements depend on the case and the court.
        </p>

        <h2>Frequently asked questions</h2>
        {faqItems.slice(0, 4).map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
        <h3>How do I get started?</h3>
        <p>
          To discuss your circumstances and possible next steps, <Link href="/contact/">Schedule Your Consultation</Link> or call <a href="tel:+19048584334">904-858-4334</a>. Bring any court papers, agreements, or questions that may help explain the issue. The consultation is an opportunity to understand the process before deciding how to proceed.
        </p>

        <h2>Schedule Your Consultation</h2>
        <p>
          If you need a Nassau County family law attorney for divorce, mediation, parenting, child support, or a related matter, <Link href="/contact/">Schedule Your Consultation</Link> or call <a href="tel:+19048584334">904-858-4334</a>. Clear information can help you choose a path that protects your interests and keeps the focus on a workable resolution.
        </p>
        <img
          src="https://www.jimmullaney.com/images/footer-jacksonville.webp"
          alt="Jacksonville office serving Northeast Florida family-law clients"
          className="w-full max-h-[300px] object-cover rounded-sm"
        />
      </InnerPage>
    </>
  );
}
