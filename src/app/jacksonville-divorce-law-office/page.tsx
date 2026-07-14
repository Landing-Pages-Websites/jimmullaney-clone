import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Divorce Law Office",
  description:
    "Near Baymeadows Road & San Jose Blvd in Jacksonville, serving Northeast Florida with divorce mediation, uncontested divorce, and family law. Call 904-858-4334.",
  alternates: { canonical: "/jacksonville-divorce-law-office" }
};

export default function OfficePage() {
  return (
    <InnerPage
      title="Jacksonville Divorce Law Office"
      breadcrumbs={[{ label: "Office" }]}
      showSidebar={false}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2>Office Location</h2>
          <h3>Our Jacksonville Office</h3>
          <p>
            <strong>Law Office of A. James Mullaney</strong>
            <br />
            8777 San Jose Blvd. Ste. 302
            <br />
            Jacksonville, FL 32217
            <br />
            Telephone: <a href="tel:+1-904-858-4334">904-858-4334</a>
          </p>
          <h2>Office Hours</h2>
          <p>
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Evenings and weekends by appointment.
          </p>
          <h2>Parking</h2>
          <p>Free parking is available at the office.</p>
          <h2>Directions to Our San Jose Blvd Office</h2>
          <p>
            My office is conveniently located just north of the intersection of
            Baymeadows Road and San Jose Boulevard in Jacksonville. Our San Jose
            Blvd office is easily accessible from I-295 and Baymeadows Road.
          </p>
          <h2>Divorce &amp; Family Law Services in Jacksonville</h2>
          <p>
            From our office near Baymeadows Road in Jacksonville, we serve
            clients throughout Northeast Florida with divorce mediation,
            uncontested divorce, and family law matters. Whether you are
            navigating a divorce, establishing a parenting plan, or seeking
            modification of an existing order, our San Jose Blvd location
            provides a comfortable setting to discuss your case and explore
            resolution options without the stress of a courtroom.
          </p>
          <h3>Local Expertise Across Northeast Florida</h3>
          <p>
            As a Florida Supreme Court-certified family court mediator with over
            25 years of experience, I bring deep knowledge of Northeast
            Florida&apos;s family law landscape to every case. From San Jose
            Blvd to Baymeadows Road, my practice serves clients across
            Jacksonville and the surrounding communities with personalized,
            cost-effective legal representation.
          </p>
          <h2>Schedule Your Consultation</h2>
          <p>
            Ready to discuss your family law needs? Call{" "}
            <a href="tel:+1-904-858-4334">904-858-4334</a> or use our{" "}
            <Link href="/contact">online contact form</Link> to schedule a
            consultation at our San Jose Blvd office near Baymeadows Road in
            Jacksonville.
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4!2d-81.61!3d30.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJacksonville%20FL"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <p>
        To contact the firm, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or use my{" "}
        <Link href="/contact">online contact form</Link>.
      </p>
    </InnerPage>
  );
}
