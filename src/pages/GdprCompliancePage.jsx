import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { PhoneIcon, MailIcon, PinIcon } from "../components/Icons";
import { Section, Dot } from "../components/LegalDoc";
import { getHeroImage } from "../data/content";
import { useSiteSettings } from "../context/SiteSettingsContext";

const WEBSITE = "https://swiftchauffeurs.com/";

export default function GdprCompliancePage() {
  const settings = useSiteSettings();
  const PHONE_1 = settings.phone_1;
  const PHONE_2 = settings.phone_2;
  const EMAIL = settings.email;
  return (
    <>
      <PageHero eyebrow="Legal" title="GDPR Compliance" image={getHeroImage("/gdpr-compliance")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <p className="text-[15px] leading-relaxed text-text-muted">
            Swift Chauffeurs LLC ("we," "us," or "our") respects the privacy of visitors from the European Economic
            Area (EEA), the United Kingdom, and Switzerland. This GDPR Compliance page explains how we apply the
            principles of the General Data Protection Regulation ("GDPR") to any personal data we collect through{" "}
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              {WEBSITE}
            </a>
            . It should be read alongside our{" "}
            <Link to="/privacy-policy-swift-chauffeurs" className="text-gold hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms-conditions" className="text-gold hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>

          <div className="mt-2">
            <Section title="Data Controller">
              <p>
                Swift Chauffeurs LLC is the data controller responsible for personal data collected through this
                website. Any questions about how we handle your data under the GDPR can be directed to us using the
                contact details at the bottom of this page.
              </p>
            </Section>

            <Section title="Our Lawful Basis for Processing">
              <p>We only process personal data where we have a valid lawful basis to do so, which may include:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  <span className="font-semibold text-text">Consent</span> — for example, when you opt into SMS or
                  email communications.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Contractual necessity</span> — to process and fulfill a
                  reservation you request.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Legitimate interests</span> — such as responding to
                  inquiries, preventing fraud, and improving our services.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Legal obligation</span> — where we're required to retain
                  or disclose data to comply with the law.
                </Dot>
              </ul>
            </Section>

            <Section title="Personal Data We Collect">
              <p>Depending on how you interact with us, we may collect:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>Name, email address, mailing address, and mobile phone number</Dot>
                <Dot>Reservation details, such as pickup/drop-off locations and dates</Dot>
                <Dot>Communications you send us via our contact form, quote form, or email</Dot>
                <Dot>Basic technical data collected automatically, such as browser type and IP address</Dot>
              </ul>
            </Section>

            <Section title="Your Rights Under the GDPR">
              <p>If the GDPR applies to you, you have the right to:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  <span className="font-semibold text-text">Access</span> — request a copy of the personal data we
                  hold about you.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Rectification</span> — request correction of inaccurate
                  or incomplete data.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Erasure</span> — request deletion of your personal data,
                  subject to any legal retention requirements.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Restriction</span> — request that we limit how we use
                  your data in certain circumstances.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Data portability</span> — request your data in a
                  structured, commonly used, machine-readable format.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Objection</span> — object to our processing of your data
                  for direct marketing or based on legitimate interests.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Withdraw consent</span> — withdraw previously given
                  consent at any time, without affecting processing carried out before the withdrawal.
                </Dot>
              </ul>
              <p>
                To exercise any of these rights, contact us using the information below. We will respond to
                verified requests within the timeframes required by the GDPR.
              </p>
            </Section>

            <Section title="International Data Transfers">
              <p>
                Swift Chauffeurs LLC is based in the United States. If you access our website from the EEA, UK, or
                Switzerland, your information may be transferred to and processed in the United States, which may
                not offer the same level of data protection as your home country. Where required, we take
                appropriate steps to ensure such transfers comply with applicable data protection law.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain personal data only for as long as necessary to fulfill the purposes described in this
                page and our Privacy Policy, or as required by law. When data is no longer needed, we take
                reasonable steps to delete or anonymize it.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                We use industry-standard technical and organizational measures — including secure storage and
                restricted access — to protect personal data from unauthorized access, disclosure, alteration, or
                destruction.
              </p>
            </Section>

            <Section title="Cookies and Tracking">
              <p>
                Our website may use cookies or similar technologies to support core functionality and understand
                how visitors use our site. Where required by law, we will seek your consent before setting
                non-essential cookies.
              </p>
            </Section>

            <Section title="Right to Lodge a Complaint">
              <p>
                If you believe our processing of your personal data infringes the GDPR, you have the right to lodge
                a complaint with your local data protection supervisory authority, in addition to contacting us
                directly.
              </p>
            </Section>

            <Section title="Changes to This Page">
              <p>
                We may update this GDPR Compliance page from time to time to reflect changes in our practices or
                legal requirements. Updates will be posted here with a revised effective date.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this GDPR Compliance page or how we
                handle your personal data, please contact us at:
              </p>
              <ul className="flex flex-col gap-3.5 text-sm text-text-muted">
                <li className="flex items-center gap-3">
                  <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                  <a href={`tel:${PHONE_1.replace(/[^\d+]/g, "")}`} className="hover:text-gold">
                    {PHONE_1}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                  <a href={`tel:${PHONE_2.replace(/[^\d+]/g, "")}`} className="hover:text-gold">
                    {PHONE_2}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
