import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { PhoneIcon, MailIcon, PinIcon } from "../components/Icons";
import { Section, Dot } from "../components/LegalDoc";
import { getHeroImage } from "../data/content";

const PHONE_1 = "+1 (201)-979-7374";
const PHONE_2 = "+1 (615) 882-1772";
const EMAIL = "contact@swiftchauffeurs.com";
const WEBSITE = "https://swiftchauffeurs.com";

const holidays = [
  "New Year's Day",
  "Easter Sunday",
  "Memorial Day",
  "Fourth of July",
  "Labor Day",
  "Thanksgiving Day",
  "Christmas Eve (after 6 pm)",
  "Christmas Day",
  "New Year's Eve (after 6 pm)",
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" image={getHeroImage("/terms")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div>
            <Section title="Business Identity Clause">
              <p>
                Swift Chauffeurs LLC – Swift Chauffeurs provide premium luxury chauffeurs transportation. By using
                our services and providing your phone number, you agree to receive text messages from us as
                described in these terms.
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

            <Section title="General Terms & Conditions">
              <p>
                By placing a reservation with Swift Chauffeurs, either by telephone, email, online, or in any other
                manner, you accept and agree, without limitation or qualification, to the following Terms and
                Conditions.
              </p>
              <p>
                You further expressly authorize Swift Chauffeurs to charge your credit card in full for all charges
                relating to your reservation. Swift Chauffeur requires a non-refundable 50% deposit to finalize all
                reservations.{" "}
                <span className="font-semibold text-text">
                  ALL DEPOSITS ARE NON-REFUNDABLE AND NON-TRANSFERABLE.
                </span>
              </p>
              <p>
                Customers are billed from the time the vehicle leaves the Swift Chauffeur facility until the time
                they return. Swift Chauffeurs LLC shall not be held responsible for late arrivals caused by acts of
                God/nature, incorrect pickup or drop-off information provided by the customer, or any situation out
                of our control (e.g., GPS loss, bad weather, accidents, traffic, or vehicle malfunctions). We reserve
                the right to switch vehicles before a run based on availability without prior notice.
              </p>
            </Section>

            <Section title="Reservations and Confirmations">
              <ul className="flex flex-col gap-2.5">
                <Dot>All new reservations and changes must be made directly with our office, not with the drivers.</Dot>
                <Dot>
                  A confirmation email will be sent to the email provided by the customer. It is the customer's
                  responsibility to review this confirmation for accuracy.
                </Dot>
                <Dot>
                  The rate provided at the time of booking is an initial estimate. Additional fees such as wait
                  time, parking, taxes, and holiday surcharges may apply. A 20% gratuity rate will be included in the
                  initial quote.
                </Dot>
                <Dot>
                  Payments are billed directly to the credit card provided at the time of booking. The price is
                  fixed once the reservation is finalized.
                </Dot>
                <Dot>
                  Accepted payment methods: American Express, Discover, MasterCard, Visa, and Cash (with a credit
                  card on file). No personal checks are accepted.
                </Dot>
              </ul>
            </Section>

            <Section title="Cancellations and Changes">
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  <span className="font-semibold text-text">
                    ALL DEPOSITS ARE NON-REFUNDABLE AND NON-TRANSFERABLE.
                  </span>
                </Dot>
                <Dot>Cancellations made less than 14 days before the service date will incur the full charge.</Dot>
                <Dot>
                  Cancellations must be requested via email at{" "}
                  <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
                    {EMAIL}
                  </a>
                  .
                </Dot>
                <Dot>
                  No refunds will be given for cancellations within 14 days of the pickup date, including same-day
                  reservations.
                </Dot>
                <Dot>No-shows will incur the full rate of service.</Dot>
                <Dot>
                  In case of a National or Global crisis requiring mandatory cancellations, any money paid will be
                  held as credit for up to 12 months.
                </Dot>
              </ul>
            </Section>

            <Section title="Airport Pickups & Transfers">
              <ul className="flex flex-col gap-2.5">
                <Dot>A flat rate applies for most domestic airport pickups and drop-offs within Metro Nashville.</Dot>
                <Dot>
                  The rate includes a 30-minute grace period for flight arrivals. Beyond 30 minutes, waiting time is
                  charged in 15-minute increments.
                </Dot>
                <Dot>Early or delayed flights will be accommodated based on availability.</Dot>
              </ul>
            </Section>

            <Section title="Point-to-Point Transfers">
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  Point-to-point transfer rates apply within Metro Nashville, available only Monday–Thursday.
                </Dot>
                <Dot>A 15-minute grace period is allowed for wait time. Additional wait time is charged at the hourly rate.</Dot>
              </ul>
            </Section>

            <Section title="Hourly Service">
              <ul className="flex flex-col gap-2.5">
                <Dot>Hourly rates apply for services requiring multiple stops, with a minimum charge of four (4) hours.</Dot>
                <Dot>Travel time may be charged on a "garage-to-garage" basis.</Dot>
                <Dot>Friday–Sunday reservations require a 4-hour minimum.</Dot>
              </ul>
            </Section>

            <Section title="Passenger Conduct">
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  Swift Chauffeurs reserves the right to refuse service to individuals under the influence, in
                  possession of illegal substances or firearms, or those deemed disruptive.
                </Dot>
                <Dot>Consumption of alcohol is strictly prohibited for passengers under 21.</Dot>
                <Dot>
                  Smoking or vaping in vehicles will result in a $250 minimum charge and possible service
                  termination with no refund.
                </Dot>
              </ul>
            </Section>

            <Section title="Excess Cleaning / Damage">
              <ul className="flex flex-col gap-2.5">
                <Dot>
                  Customers are responsible for any damage caused during the rental period, including gum, alcohol
                  spills, smoking, vomiting, and broken items.
                </Dot>
                <Dot>A minimum cleaning fee of $250 applies for excessive cleaning or damage.</Dot>
              </ul>
            </Section>

            <Section title="Additional Charges">
              <ul className="flex flex-col gap-2.5">
                <Dot>Extra stops are charged a minimum of $25 per stop.</Dot>
                <Dot>Additional charges apply for tolls, parking, airport fees, and requested amenities.</Dot>
                <Dot>A 3% processing/administrative fee applies.</Dot>
              </ul>
            </Section>

            <Section title="Holidays">
              <p>A $25/hour surcharge applies to trips on the following holidays:</p>
              <ul className="flex flex-col gap-2.5">
                {holidays.map((h) => (
                  <Dot key={h}>{h}</Dot>
                ))}
              </ul>
            </Section>

            <Section title="Chauffeur Accommodations">
              <p>For overnight travel, clients are responsible for providing lodging and meals for the chauffeur.</p>
            </Section>

            <Section title="Opt-Out & Support Mechanisms Clause">
              <p>
                You can cancel the SMS service at any time. Just text "STOP" to{" "}
                <a href={`tel:${PHONE_1.replace(/[^\d+]/g, "")}`} className="text-gold hover:underline">
                  (201) 979-7374
                </a>
                . After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you
                have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to
                join again, just sign up as you did the first time and we will start sending SMS messages to you
                again. If you are experiencing issues with the messaging program you can reply with the keyword HELP
                for more assistance, or you can get help directly at{" "}
                <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">
                  {EMAIL}
                </a>{" "}
                or{" "}
                <a href={`tel:${PHONE_1.replace(/[^\d+]/g, "")}`} className="text-gold hover:underline">
                  (201) 979-7374
                </a>
                .
              </p>
            </Section>

            <Section title="Carrier Liability Clause">
              <p>Carriers are not liable for delayed or undelivered messages.</p>
            </Section>

            <Section title="Message Frequency Clause">
              <p>
                As always, message and data rates may apply for any messages sent to you from us and to us from you.
                Message frequency varies based on your activity. If you have any questions about your text plan or
                data plan, it is best to contact your wireless provider.
              </p>
            </Section>

            <Section title="Privacy Policy Cross-Link">
              <p>
                If you have any questions regarding privacy, please read our{" "}
                <Link to="/privacy-policy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section title="Contract Obligations">
              <p>
                By accepting services, you agree to the above Terms and Conditions and authorize Swift Chauffeurs to
                charge your credit card for all services, damages, and applicable fees.
              </p>
              <p className="font-semibold text-text">
                SWIFT CHAUFFEURS RESERVES THE RIGHT TO CHANGE ITS TERMS AND CONDITIONS AT ANY TIME WITHOUT PRIOR
                NOTICE. ANY TERMS NOT INCLUDED ON THIS PAGE ARE SUBJECT TO THE SOLE DISCRETION OF SWIFT CHAUFFEURS.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding these Terms and Conditions, please
                contact us at:
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
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
