import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import PracticeAreasSidebar from "../components/PracticeAreasSidebar";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "About a Jacksonville Family Law Attorney & Florida Certified Mediator",
  description:
    "Meet A. James Mullaney, a Jacksonville family-law attorney and Florida Supreme Court-certified mediator with 25+ years of exclusive family-law practice in FL and GA.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About" }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Header />
      <PageHero title="Jacksonville Family Law Attorney and Mediator" breadcrumbs={breadcrumbs} />

      {/* Featured portrait band — cream background with large asymmetric portrait
          and an introduction that flows around it. */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
          {/* Portrait with layered frame treatment */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
            {/* Navy block behind the portrait for editorial offset */}
            <div
              aria-hidden="true"
              className="absolute z-0"
              style={{ top: 24, left: 24, right: -24, bottom: -24, background: "#03254B" }}
            />
            {/* Brass corner accents */}
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

          {/* Intro copy */}
          <div>
            <p
              className="text-[#8B2635] text-[12px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Meet A. James Mullaney
            </p>
            <h2
              className="text-[#03254B] text-[36px] lg:text-[44px] leading-[1.12] mb-6"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
            >
              Twenty-five years. <em className="italic text-[#8B2635]">Family law only.</em>
            </h2>
            <div
              aria-hidden="true"
              className="mb-6"
              style={{
                width: 64,
                height: 2,
                background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
              }}
            />
            <p
              className="text-[#03254B]/85 text-[18px] leading-[1.7] mb-5"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              When you hire me, you get me &mdash; not a first-year associate with
              half the experience. I&apos;ve spent my entire career handling
              divorce, uncontested divorce, paternity, mediation, and the full
              range of Florida family-law matters. My goal is simple: resolve
              your case efficiently, keep your costs reasonable, and leave your
              family in the best position possible.
            </p>
            <p className="text-[#03254B]/75 text-[16px] leading-[1.8] mb-8">
              I am admitted in both Florida and Georgia and hold Florida Supreme
              Court certification as a family court mediator. My office is in
              Mandarin, just north of the San Jose / Baymeadows intersection.
            </p>

            {/* Credentials row */}
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
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Call 904-858-4334
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#03254B] text-[#03254B] hover:bg-[#03254B] hover:text-white uppercase font-semibold tracking-[2px] text-[13px] px-6 py-3 transition-all"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed bio — same content as before, now in its own section with sidebar */}
      <main className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className="flex-1 prose prose-lg max-w-none">
              <div className="text-[#03254B] text-[17px] leading-[1.8] space-y-6 inner-content">
                <p>
                  There is no doubt that your family-law dispute can cause a
                  great deal of stress. Very often, clients face a complete
                  change to their lifestyle. Because I have practiced
                  exclusively as a family-law attorney for more than twenty-five
                  years, I&apos;ve seen how these cases affect clients &mdash;
                  and I will make sure you are not overwhelmed by the process.
                </p>
                <p>
                  As an experienced divorce lawyer in Jacksonville, I am aware
                  of the emotional toll these cases take on clients and their
                  children. My goal is to help clients complete a smooth
                  transition to the next stage of their lives.
                </p>
                <p>
                  In many cases, the most stress comes from the duration of
                  the case. If possible, I look for ways to resolve cases.
                  Costly litigation is the last option. <strong>Always</strong>.
                  Experience has shown me that quicker settlements make for
                  happier clients. However, if a settlement is not possible, I
                  can take your case to court.
                </p>

                <h2>Education</h2>
                <p>
                  I was born and raised in Jacksonville. I graduated from
                  Wolfson High School in 1985. I attended the University of
                  Florida and received a Bachelor of Science degree in 1990.
                  After graduate school at the University of Central Florida, I
                  graduated from Cumberland School of Law at Samford
                  University. In 1996, I returned to Jacksonville, where I have
                  been practicing law ever since. In 2000, I started my own
                  practice focused exclusively on family law.
                </p>

                <h2>Where I Practice</h2>
                <p>
                  Unlike most Jacksonville family-law attorneys,{" "}
                  <strong>I am also licensed to practice law in Georgia</strong>.
                  My practice takes me to <strong>Duval</strong>,{" "}
                  <strong>Clay</strong>, <strong>St. Johns</strong>,{" "}
                  <strong>Nassau</strong>, <strong>Ware</strong>,{" "}
                  <strong>Charlton</strong>, and <strong>Camden</strong>{" "}
                  counties. With video conferencing I can appear in almost
                  any Florida county just as easily as in Duval.
                </p>

                <h2>Credentials</h2>
                <ul>
                  <li>Member of The Florida Bar (1996)</li>
                  <li>Member of the State Bar of Georgia</li>
                  <li>Florida Supreme Court&ndash;certified family court mediator</li>
                  <li>Florida Supreme Court appellate mediator</li>
                  <li>Admitted, U.S. District Court for the Middle District of Florida</li>
                  <li>Admitted, Georgia Court of Appeals and Georgia Supreme Court</li>
                  <li>Admitted, U.S. Court of Appeals for the 11th Circuit</li>
                </ul>

                <p>
                  My office is conveniently located just north of the
                  intersection of Baymeadows Road and San Jose Boulevard in
                  Jacksonville. Free parking is available.{" "}
                  <Link href="/contact">Contact the firm</Link> to schedule a
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
        className="text-[#03254B] text-[24px] leading-[1.1] mb-1"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
      >
        {num}
      </div>
      <div className="text-[#03254B]/60 text-[12px] uppercase tracking-[1px]">
        {label}
      </div>
    </div>
  );
}
