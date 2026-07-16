/**
 * Reusable JSON-LD emitter. Pass any schema.org object; it renders a
 * <script type="application/ld+json"> tag that Google and other search
 * engines parse for rich results.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BASE_URL = "https://jimmullaney-clone.vercel.app";
const PHONE = "+1-904-858-4334";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "8777 San Jose Blvd. Ste. 302",
  addressLocality: "Jacksonville",
  addressRegion: "FL",
  postalCode: "32217",
  addressCountry: "US",
};

/** Sitewide: emitted from the root layout. */
export const legalServiceSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness", "Attorney"],
  "@id": `${BASE_URL}/#business`,
  name: "Law Office of A. James Mullaney",
  alternateName: "Mullaney Law",
  description:
    "Jacksonville, Florida family-law attorney and Florida Supreme Court–certified family court mediator with over 25 years of experience in uncontested divorce, mediation, paternity, and parenting plans.",
  url: BASE_URL,
  telephone: PHONE,
  priceRange: "$$",
  image: `${BASE_URL}/images/logo.jpg`,
  logo: `${BASE_URL}/images/logo.jpg`,
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.22152,
    longitude: -81.6163,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Duval County, Florida" },
    { "@type": "AdministrativeArea", name: "Clay County, Florida" },
    { "@type": "AdministrativeArea", name: "St. Johns County, Florida" },
    { "@type": "AdministrativeArea", name: "Nassau County, Florida" },
    { "@type": "State", name: "Florida" },
    { "@type": "State", name: "Georgia" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/attorney/mullaney-a-james/#attorney`,
    name: "A. James Mullaney",
  },
  knowsAbout: [
    "Uncontested Divorce",
    "Family Law Mediation",
    "Contested Divorce",
    "Collaborative Divorce",
    "Child Support",
    "Alimony",
    "Paternity",
    "Parenting Plans",
    "Time-Sharing",
    "Prenuptial Agreements",
    "Equitable Distribution",
    "Military Divorce",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: 108,
    bestRating: "5",
    worstRating: "1",
  },
};

export const attorneySchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "@id": `${BASE_URL}/attorney/mullaney-a-james/#attorney`,
  name: "A. James Mullaney",
  jobTitle: "Founder and Attorney",
  description:
    "Jacksonville family-law attorney with 25+ years of exclusive practice in family law. Florida Supreme Court–certified family court mediator. Licensed in Florida and Georgia.",
  image: `${BASE_URL}/images/mullaney-portrait.png`,
  url: `${BASE_URL}/attorney/mullaney-a-james`,
  telephone: PHONE,
  address: ADDRESS,
  alumniOf: [
    { "@type": "EducationalOrganization", name: "University of Florida" },
    { "@type": "EducationalOrganization", name: "Cumberland School of Law at Samford University" },
  ],
  hasCredential: [
    "Member, The Florida Bar",
    "Member, State Bar of Georgia",
    "Florida Supreme Court-certified family court mediator",
    "Florida Supreme Court appellate mediator",
  ],
  worksFor: { "@id": `${BASE_URL}/#business` },
};

/** FAQPage schema for the /contact page about initial consultation scheduling. */
export const contactFaqSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I schedule an initial consultation with the Law Office of A. James Mullaney?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call 904-858-4334 or use the contact form on this page to schedule a consultation with a Jacksonville family law attorney.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I have ready when scheduling a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Have your basic contact information, a brief description of your legal matter, and any relevant documents ready when you call or fill out the contact form.",
      },
    },
    {
      "@type": "Question",
      name: "Can I schedule a consultation online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can use the contact form on this page to send a message and request a consultation. A member of our office will follow up to confirm your appointment time.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during an initial family law consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During a consultation, the firm can listen to your situation, discuss your legal options, explain the relevant legal process, and answer your questions about how Florida or Georgia law may apply to your case.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Law Office of A. James Mullaney handle cases outside of Jacksonville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The firm serves clients throughout Northeast Florida including Duval, Clay, St. Johns, and Nassau counties, and is also licensed in Georgia for clients in Ware, Charlton, and Camden counties. Consultations are available by phone or video conference as well.",
      },
    },
  ],
};

/** Helper to emit a BreadcrumbList from the breadcrumb trail on inner pages. */
export function breadcrumbSchema(
  trail: { label: string; href?: string }[],
): Record<string, unknown> {
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: crumb.label,
      ...(crumb.href ? { item: `${BASE_URL}${crumb.href}` } : {}),
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}
