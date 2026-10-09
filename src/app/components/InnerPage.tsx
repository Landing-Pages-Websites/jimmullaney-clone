import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import PracticeAreasSidebar from "./PracticeAreasSidebar";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "./StructuredData";

interface InnerPageProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function InnerPage({
  title,
  breadcrumbs = [],
  children,
  showSidebar = true,
}: InnerPageProps) {
  return (
    <>
      {breadcrumbs.length > 0 && (
        <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      )}
      <Header />
      <PageHero title={title} breadcrumbs={breadcrumbs} />
      <main className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <article className={`flex-1 prose prose-lg max-w-none ${showSidebar ? "" : "w-full"}`}>
              <div className="text-[#03254B] text-[17px] leading-[1.8] space-y-6 inner-content">
                {children}
              </div>
            </article>
            {showSidebar && <PracticeAreasSidebar />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
