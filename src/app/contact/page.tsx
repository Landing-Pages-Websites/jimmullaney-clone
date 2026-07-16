import InnerPage from "../components/InnerPage";
import { JsonLd, contactFaqSchema } from "../components/StructuredData";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact a Jacksonville Family Law Attorney | Schedule a Consultation",
  description:
    "Contact the Law Office of A. James Mullaney in Jacksonville, FL. Call 904-858-4334 or message us to schedule a confidential family-law consultation with Jim directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
    <JsonLd data={contactFaqSchema} />
    <InnerPage
      title="Contact Law Office of A. James Mullaney"
      breadcrumbs={[{ label: "Contact" }]}
      showSidebar={false}
    >
      <p>
        While this website provides general information, it does not constitute
        legal advice. The best way to get guidance on your specific legal issue
        is to contact a lawyer. To schedule a meeting with an attorney, please
        call the firm or complete the intake form below.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h2>Office Information</h2>
          <p>
            <strong>Law Office of A. James Mullaney</strong>
            <br />
            8777 San Jose Blvd. Ste. 302
            <br />
            Jacksonville, FL 32217
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1-904-858-4334">904-858-4334</a>
          </p>
          <h3>Office Hours</h3>
          <p>
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday - Sunday: By appointment
          </p>
        </div>

        <div>
          <h2>Send A Message</h2>
          <form className="space-y-4" action="/api/contact" method="post">
            <div>
              <label className="block text-[14px] font-semibold mb-1">Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#8B2635]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#8B2635]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#8B2635]"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold mb-1">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#8B2635]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8B2635] text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 hover:bg-[#6F1D2A] transition-colors"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <section className="mt-16">
        <h2>Contact and Consultation FAQs</h2>

        <div className="space-y-8 mt-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              How do I schedule an initial consultation with the Law Office of A. James Mullaney?
            </h3>
            <p>
              Call 904-858-4334 or use the contact form on this page to schedule a consultation with a Jacksonville family law attorney.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              What information should I have ready when scheduling a consultation?
            </h3>
            <p>
              Have your basic contact information, a brief description of your legal matter, and any relevant documents ready when you call or fill out the contact form.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Can I schedule a consultation online?
            </h3>
            <p>
              Yes, you can use the contact form on this page to send a message and request a consultation. A member of our office will follow up to confirm your appointment time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              What happens during an initial family law consultation?
            </h3>
            <p>
              During a consultation, the firm can listen to your situation, discuss your legal options, explain the relevant legal process, and answer your questions about how Florida or Georgia law may apply to your case.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Does the Law Office of A. James Mullaney handle cases outside of Jacksonville?
            </h3>
            <p>
              Yes. The firm serves clients throughout Northeast Florida including Duval, Clay, St. Johns, and Nassau counties, and is also licensed in Georgia for clients in Ware, Charlton, and Camden counties. Consultations are available by phone or video conference as well.
            </p>
          </div>
        </div>
      </section>
    </InnerPage>
    </>
  );
}
