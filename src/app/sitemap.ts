import type { MetadataRoute } from "next";

const BASE_URL = "https://jimmullaney-clone.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    // Primary pages
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/attorney/mullaney-a-james", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/jacksonville-divorce-law-office", priority: 0.8, changeFrequency: "yearly" },

    // Primary focus pages
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl", priority: 1.0, changeFrequency: "monthly" },
    { path: "/divorce/divorce-mediation-in-jacksonville", priority: 1.0, changeFrequency: "monthly" },

    // Divorce + subpages
    { path: "/divorce", priority: 0.9, changeFrequency: "monthly" },
    { path: "/divorce/alimony", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/child-support", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/collaborative-divorce", priority: 0.7, changeFrequency: "monthly" },
    { path: "/divorce/contested-divorce", priority: 0.7, changeFrequency: "monthly" },
    { path: "/divorce/equitable-distribution", priority: 0.7, changeFrequency: "monthly" },
    { path: "/divorce/military-issues", priority: 0.7, changeFrequency: "monthly" },

    // Uncontested divorce sub-pages
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl/step-by-step-guide-to-filing-uncontested-divorce-in-jacksonville", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl/florida-marital-settlement-agreements", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl/online-uncontested-divorce-vs-attorney-assisted-pros-and-cons", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl/uncontested-vs-simplified-divorce-in-florida", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divorce/uncontested-divorce-in-jacksonville-fl/what-happens-at-the-final-hearing-for-an-uncontested-divorce-in-florida", priority: 0.8, changeFrequency: "monthly" },

    // Other practice areas
    { path: "/paternity", priority: 0.8, changeFrequency: "monthly" },
    { path: "/time-sharing-and-visitation-in-florida", priority: 0.8, changeFrequency: "monthly" },
    { path: "/time-sharing-and-visitation-in-florida/relocations", priority: 0.7, changeFrequency: "monthly" },
    { path: "/domestic-violence", priority: 0.8, changeFrequency: "monthly" },
    { path: "/prenuptial-agreements", priority: 0.7, changeFrequency: "monthly" },
    { path: "/annulment-lawyer-in-jacksonville", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contempt", priority: 0.7, changeFrequency: "monthly" },
    { path: "/modifications", priority: 0.7, changeFrequency: "monthly" },
    { path: "/family-law", priority: 0.6, changeFrequency: "monthly" },

    // Tools & content
    { path: "/florida-child-support-calculator", priority: 0.9, changeFrequency: "yearly" },
    { path: "/videos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog/2026/09/florida-simplified-dissolution-who-qualifies", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog/2026/09/post-divorce-modification-attorney-jacksonville-guide", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/2026/09/alimony-attorney-st-johns-issues", priority: 0.7, changeFrequency: "monthly" },

    // Legal
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
    { path: "/site-map", priority: 0.3, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
