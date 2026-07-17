import PageHero from "../components/PageHero";
import { PhoneIcon, MailIcon, PinIcon } from "../components/Icons";
import { Section, Dot } from "../components/LegalDoc";
import { getHeroImage } from "../data/content";
import { useSiteSettings } from "../context/SiteSettingsContext";

const WEBSITE = "https://swiftchauffeurs.com/";

export default function PrivacyPolicyPage() {
  const settings = useSiteSettings();
  const PHONE_1 = settings.phone_1;
  const PHONE_2 = settings.phone_2;
  const EMAIL = settings.email;
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image={getHeroImage("/privacy-policy-swift-chauffeurs")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <p className="text-[15px] leading-relaxed text-text-muted">
            At Swift Chauffeurs ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy outlines how we collect, use, protect, and
            retain your data when you interact with our website,{" "}
            <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              {WEBSITE}
            </a>
            , or opt into our text messages service. By using our services, you agree to the terms outlined in this
            policy.
          </p>

          <div className="mt-2">
            <Section title="Information We Collect">
              <p>
                We collect the following types of personal information when you sign up for our text messages
                updates or interact with our services:
              </p>
              <ul className="flex flex-col gap-2.5">
                <Dot>Name</Dot>
                <Dot>Email Address</Dot>
                <Dot>Mailing Address</Dot>
                <Dot>Mobile Phone Number</Dot>
              </ul>
              <p>This information is collected through:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>Our website contact form</Dot>
                <Dot>Email communications</Dot>
                <Dot>Website Quote Form</Dot>
                <Dot>Third-party reservation systems</Dot>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <p>We use your personal information solely for the following purposes:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>To send you updates, promotions, and reminders related to our services.</Dot>
                <Dot>To provide customer support and respond to your inquiries.</Dot>
                <Dot>To improve our services and enhance your experience with Swift Chauffeurs LLC.</Dot>
              </ul>
            </Section>

            <Section title="Data Security">
              <p>
                We take the security of your personal information seriously. We implement industry-standard measures
                to protect your data from unauthorized access, disclosure, alteration, or destruction. These
                measures include secure storage systems and restricted access to your information.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain your personal information for as long as you are subscribed to our text messages service.
                If you choose to unsubscribe, we will remove your information from our active databases within 24
                hours of receiving your opt-out request. You may request the deletion of your data at any time by
                contacting us using the information provided below.
              </p>
            </Section>

            <Section title="Text Messaging Terms">
              <p>By opting into our SMS messaging service, you agree to the following:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  <span className="font-semibold text-text">Message and Data Rates:</span> Your mobile carrier may
                  charge fees for sending or receiving text messages, especially if you do not have an unlimited
                  texting or data plan.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Message Frequency:</span> Messages are recurring, and the
                  frequency may vary.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Opt-In:</span> By opting into our SMS messaging service,
                  you consent to receive notifications regarding bookings, trip status, updates, and other relevant
                  information.
                </Dot>
                <Dot>
                  <span className="font-semibold text-text">Opt-Out:</span> You can opt out of receiving SMS messages
                  at any time by texting or emailing{" "}
                  <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
                    {EMAIL}
                  </a>
                  , replying STOP, or calling{" "}
                  <a href={`tel:${PHONE_1.replace(/[^\d+]/g, "")}`} className="text-gold hover:underline">
                    {PHONE_1}
                  </a>{" "}
                  or{" "}
                  <a href={`tel:${PHONE_2.replace(/[^\d+]/g, "")}`} className="text-gold hover:underline">
                    {PHONE_2}
                  </a>
                  . After unsubscribing, you will receive a final confirmation SMS, and your number will be removed
                  from our list within 24 hours.
                </Dot>
              </ul>
            </Section>

            <Section title="Non-Sharing Clause">
              <p>
                No mobile information will be shared with third parties/affiliates for marketing/promotional
                purposes. Information sharing to subcontractors in support services, such as customer service, is
                permitted. All other use case categories exclude text messaging originator opt-in data and consent;
                this information will not be shared with any third parties.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>Under applicable US laws, you have the right to:</p>
              <ul className="flex flex-col gap-2.5">
                <Dot>Access the personal information we hold about you.</Dot>
                <Dot>Request corrections to any inaccurate or incomplete data.</Dot>
                <Dot>Request the deletion of your personal information.</Dot>
                <Dot>Opt out of receiving marketing communications at any time.</Dot>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. Any updates will be posted on our website with the effective date. We encourage you to
                review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                practices, please contact us at:
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
                <li className="flex items-center gap-3">
                  <PinIcon width={18} height={18} className="flex-shrink-0 text-gold" />
                  <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    {WEBSITE}
                  </a>
                </li>
              </ul>
              <p>
                Thank you for trusting Swift Chauffeurs with your personal information. We are committed to
                providing you with exceptional service while safeguarding your privacy.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
