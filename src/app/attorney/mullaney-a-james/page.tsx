import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import PracticeAreasSidebar from "../../components/PracticeAreasSidebar";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { attorneySchema, breadcrumbSchema } from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "A. James Mullaney — Jacksonville Family Law Attorney & Mediator",
  description:
    "Meet A. James Mullaney, a Jacksonville family-law attorney with 25+ years of exclusive family-law practice and Florida Supreme Court mediator certification. Call 904-858-4334.",
  alternates: { canonical: "/attorney/mullaney-a-james" },
  openGraph: {
    title: "A. James Mullaney — Jacksonville Family Law Attorney & Mediator",
    description:
      "25+ years of exclusive family-law practice. Florida Supreme Court-certified family court mediator.",
    url: "/attorney/mullaney-a-james",
    images: [{ url: "/images/mullaney-portrait.png" }],
  },
};

export default function AttorneyPage() {
  const breadcrumbs = [{ label: "Attorney" }];
  return (
    <>
      <JsonLd data={attorneySchema} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Header />
      <PageHero title="A. James Mullaney" breadcrumbs={breadcrumbs} />

      {/* Featured portrait band with asymmetric offset + corner brackets */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute z-0"
              style={{ top: 24, left: 24, right: -24, bottom: -24, background: "#03254B" }}
            />
            <div
              aria-hidden="true"
              className="absolute z-20"
              style={{
                top: -12,
                left: -12,
                width: 80,
                height: 80,
                borderTop: "3px solid #E0B158",
                borderLeft: "3px solid #E0B158",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute z-20"
              style={{
                bottom: -36,
                right: -36,
                width: 80,
                height: 80,
                borderBottom: "3px solid #8B2635",
                borderRight: "3px solid #8B2635",
              }}
            />
            <div className="relative z-10">
              <Image
                src="/images/mullaney-portrait.png"
                alt="A. James Mullaney, Jacksonville family law attorney"
                width={1477}
                height={1065}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Intro */}
          <div>
            <p
              className="text-[#8B2635] text-[12px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
            >
              Founder &amp; Attorney
            </p>
            <h2
              className="text-[#03254B] text-[34px] lg:text-[42px] leading-[1.12] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
            >
              Direct representation. <em className="italic text-[#8B2635]">No handoffs.</em>
            </h2>
            <div
              aria-hidden="true"
              className="mb-6"
              style={{
                width: 60,
                height: 2,
                background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
              }}
            />
            <p
              className="text-[#03254B]/85 text-[17px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              I am one of the more experienced divorce and family-law attorneys
              in Jacksonville. Having focused exclusively on family law for
              more than twenty-five years, I understand the emotional and
              financial toll these cases take on clients and their children
              &mdash; and my practice is built to minimize both.
            </p>
            <p className="text-[#03254B]/75 text-[16px] leading-[1.8] mb-8">
              Most of my work today centers on{" "}
              <Link href="/divorce/uncontested-divorce-in-jacksonville-fl" className="text-[#8B2635] underline">
                uncontested divorce
              </Link>{" "}
              and{" "}
              <Link href="/divorce/divorce-mediation-in-jacksonville" className="text-[#8B2635] underline">
                mediation
              </Link>
              &mdash; two approaches that let families resolve matters
              efficiently, privately, and at a fraction of contested-
              litigation cost.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <CredCard num="25+" label="Years Practicing Family Law" />
              <CredCard num="FL & GA" label="Admitted to Practice" />
              <CredCard num="1996" label="Admitted to the Florida Bar" />
              <CredCard num="Certified" label="FL Supreme Court Mediator" />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+1-904-858-4334"
                className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-semibold tracking-[2px] text-[13px] px-6 py-3 transition-colors"
                style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
              >
                Call 904-858-4334
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#03254B] text-[#03254B] hover:bg-[#03254B] hover:text-white uppercase font-semibold tracking-[2px] text-[13px] px-6 py-3 transition-all"
                style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed bio */}
      <main className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 prose prose-lg max-w-none">
              <div className="text-[#03254B] text-[17px] leading-[1.8] space-y-6 inner-content">
                <h2>Education</h2>
                <ul>
                  <li>Cumberland School of Law at Samford University, J.D.</li>
                  <li>University of Central Florida, Graduate Studies</li>
                  <li>University of Florida, B.S., 1990</li>
                  <li>Wolfson High School, 1985</li>
                </ul>

                <h2>Bar Admissions</h2>
                <ul>
                  <li>The Florida Bar</li>
                  <li>State Bar of Georgia</li>
                  <li>U.S. District Court for the Middle District of Florida</li>
                  <li>Georgia Court of Appeals and Georgia Supreme Court</li>
                  <li>U.S. Court of Appeals for the 11th Circuit</li>
                </ul>

                <h2>Certifications</h2>
                <ul>
                  <li>Florida Supreme Court-certified family court mediator</li>
                  <li>Florida Supreme Court appellate mediator</li>
                </ul>

                <h2>Counties Served</h2>
                <p>
                  I regularly appear in Duval, Clay, St. Johns, Nassau, Ware,
                  Charlton, and Camden counties, and I can appear in any
                  Florida or Georgia county remotely.
                </p>

                <p>
                  Please call <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
                  <Link href="/contact">contact me online</Link> to schedule a
                  consultation.
                </p>
              </div>
            </article>
            <PracticeAreasSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CredCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="border-l-2 border-[#8B2635] pl-4">
      <div
        className="text-[#03254B] text-[22px] leading-[1.1] mb-1"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
      >
        {num}
      </div>
      <div
        className="text-[#03254B]/60 text-[11px] uppercase tracking-[1px]"
        style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
}
