import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy - FocusAir" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article className="prose">
        <p className="text-sm text-gray-500 mb-2">Last updated: January 1, 2026</p>
        <h1>Privacy Policy</h1>

        <p>
          This privacy notice for Yan Smaliak ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"),
          describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information
          when you use our services ("<strong>Services</strong>"), such as when you:
        </p>
        <ul>
          <li>Download and use our mobile application (FocusAir), or any other application of ours that links to this privacy notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices.
          If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns,
          please contact us at <a href="mailto:support@focusair.app">support@focusair.app</a>.
        </p>

        <h2>Summary of Key Points</h2>
        <p>
          <em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics
          by reading the full policy below.</em>
        </p>
        <ul>
          <li><strong>What personal information do we process?</strong> We process minimal personal information. Your app data is stored locally on your device and synced via iCloud (managed by Apple). We collect anonymized analytics data to improve our Services.</li>
          <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
          <li><strong>Do we receive any information from third parties?</strong> We receive limited information from payment processors (RevenueCat) regarding subscription status.</li>
          <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, and to comply with law.</li>
          <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information with service providers (analytics, payment processing) as described in this policy.</li>
          <li><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
        </ul>

        <h2>1. What Information Do We Collect?</h2>

        <h3>Personal information you disclose to us</h3>
        <p>
          <em><strong>In Short:</strong> We collect minimal personal information that you provide to us.</em>
        </p>
        <p>
          FocusAir is designed with privacy as a core principle. <strong>We do not require you to create an account.</strong> Your focus sessions,
          settings, preferences, and app data are stored locally on your device and may sync across your devices via Apple's iCloud service.
          We do not have access to this data.
        </p>
        <p>
          <strong>Information we may collect includes:</strong>
        </p>
        <ul>
          <li><strong>Contact information.</strong> If you contact us for support, we may collect your email address and any information you choose to provide.</li>
        </ul>

        <h3>Information automatically collected</h3>
        <p>
          <em><strong>In Short:</strong> Some information — such as your device characteristics and usage patterns — is collected automatically when you use our Services.</em>
        </p>
        <p>
          We automatically collect certain information when you use the App. This information does not reveal your specific identity
          (like your name or contact information) but may include device and usage information, such as:
        </p>
        <ul>
          <li><strong>Device Information.</strong> We collect device information such as device type, operating system and version, unique device identifiers, and general device characteristics.</li>
          <li><strong>Usage Data.</strong> We collect information about how you interact with the App, including features used, actions taken, and time spent in the app. This data is anonymized and aggregated.</li>
          <li><strong>Crash Reports and Performance Data.</strong> We collect crash logs and performance metrics to identify and fix bugs and improve app stability.</li>
        </ul>
        <p>
          This information is collected through PostHog, our analytics provider, and is used to maintain and improve our Services.
          This data does not include personally identifiable information.
        </p>

        <h3>Information collected through our App</h3>
        <p>
          <em><strong>In Short:</strong> We do not collect location data or access your device sensors beyond what is necessary for app functionality.</em>
        </p>
        <p>
          If you use our App, we do not access:
        </p>
        <ul>
          <li><strong>Geolocation Information.</strong> We do not request or collect precise or approximate location data.</li>
          <li><strong>Push Notifications.</strong> We may request to send you push notifications regarding focus session reminders. You can opt out at any time in your device settings.</li>
        </ul>

        <h2>2. How Do We Process Your Information?</h2>
        <p>
          <em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, for security and fraud prevention, and to comply with law.</em>
        </p>
        <p>
          <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
        </p>
        <ul>
          <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
          <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
          <li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
          <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
          <li><strong>To identify usage trends.</strong> We may process anonymized usage data to understand how our Services are being used so we can improve them.</li>
          <li><strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
        </ul>

        <h2>3. When and With Whom Do We Share Your Personal Information?</h2>
        <p>
          <em><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</em>
        </p>
        <p>
          We may need to share your personal information in the following situations:
        </p>
        <ul>
          <li><strong>Service Providers.</strong> We may share your information with service providers who perform services for us or on our behalf, including:
            <ul>
              <li><strong>PostHog</strong> - for anonymized analytics</li>
              <li><strong>RevenueCat</strong> - for subscription and payment management</li>
              <li><strong>Apple</strong> - for app distribution and iCloud synchronization</li>
            </ul>
          </li>
          <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>Legal Obligations.</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
          <li><strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
        </ul>

        <h2>4. Do We Use Cookies and Other Tracking Technologies?</h2>
        <p>
          <em><strong>In Short:</strong> We do not use cookies in our mobile application.</em>
        </p>
        <p>
          Our mobile application does not use cookies. We use PostHog for analytics, which collects anonymized usage data as described in Section 1.
        </p>

        <h2>5. How Long Do We Keep Your Information?</h2>
        <p>
          <em><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice,
          unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
        </p>
        <p>
          Your app data (focus sessions, settings, preferences) is stored locally on your device and in iCloud. This data remains
          until you delete the App or clear its data. We do not have access to or control over this data.
        </p>
        <p>
          Analytics data is retained according to PostHog's data retention policies. Subscription data through RevenueCat is retained
          as necessary to manage your subscription and for financial record-keeping.
        </p>

        <h2>6. How Do We Keep Your Information Safe?</h2>
        <p>
          <em><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</em>
        </p>
        <p>
          We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security
          of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic
          transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or
          guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly
          collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission
          of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
        </p>

        <h2>7. What Are Your Privacy Rights?</h2>
        <p>
          <em><strong>In Short:</strong> Depending on your location, you may have certain rights regarding your personal information.</em>
        </p>
        <p>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws.
          These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification
          or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not
          to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of
          your personal information.
        </p>

        <h3>European Economic Area (EEA), United Kingdom (UK), and Switzerland</h3>
        <p>
          If you are a resident in the European Economic Area, United Kingdom, or Switzerland, you have the right to:
        </p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          If you wish to exercise any of these rights, please contact us at <a href="mailto:support@focusair.app">support@focusair.app</a>.
          We will respond to your request within 30 days.
        </p>
        <p>
          If you believe we are unlawfully processing your personal information, you have the right to complain to your local data protection
          supervisory authority. If you are in the EEA, you can find contact details for your supervisory authority here:
          <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
        </p>

        <h3>Account Information</h3>
        <p>
          Since FocusAir does not require account creation, you can manage your data directly:
        </p>
        <ul>
          <li><strong>Delete local app data:</strong> Uninstall the App from your device</li>
          <li><strong>Manage iCloud data:</strong> Through your device's iCloud settings</li>
          <li><strong>Request analytics data deletion:</strong> Contact us at <a href="mailto:support@focusair.app">support@focusair.app</a></li>
        </ul>

        <h2>8. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting
          you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
          At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised
          version of this privacy notice.
        </p>

        <h2>9. Do We Make Updates to This Notice?</h2>
        <p>
          <em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date
          and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice,
          we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage
          you to review this privacy notice frequently to be informed of how we are protecting your information.
        </p>

        <h2>10. Do California Residents Have Specific Privacy Rights?</h2>
        <p>
          <em><strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em>
        </p>
        <p>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents
          to request and obtain from us, once a year and free of charge, information about categories of personal information (if any)
          we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared
          personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a
          request, please submit your request in writing to us using the contact information provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to
          request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using
          the contact information provided below and include the email address associated with your account and a statement that you reside
          in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be
          completely or comprehensively removed from all our systems (e.g., backups, etc.).
        </p>

        <h3>CCPA Privacy Notice</h3>
        <p>
          The California Code of Regulations defines a "resident" as:
        </p>
        <ul>
          <li>every individual who is in the State of California for other than a temporary or transitory purpose and</li>
          <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
        </ul>
        <p>
          All other individuals are defined as "non-residents."
        </p>
        <p>
          If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
        </p>
        <p>
          <strong>Your rights with respect to your personal data:</strong>
        </p>
        <ul>
          <li>Right to request deletion of your data</li>
          <li>Right to be informed about what data we collect</li>
          <li>Right to non-discrimination for exercising your privacy rights</li>
          <li>Right to opt-out of the sale of your personal information (Note: We do not sell personal information)</li>
        </ul>

        <h2>11. Do Virginia Residents Have Specific Privacy Rights?</h2>
        <p>
          <em><strong>In Short:</strong> Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and use of your personal information.</em>
        </p>
        <p>
          Under the Virginia Consumer Data Protection Act (VCDPA), Virginia residents have the right to:
        </p>
        <ul>
          <li>Know whether we are processing your personal data</li>
          <li>Access your personal data</li>
          <li>Correct inaccuracies in your personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Obtain a copy of your personal data in a portable format</li>
          <li>Opt out of targeted advertising, sale of personal data, or profiling</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:support@focusair.app">support@focusair.app</a>.
        </p>

        <h2>12. Do We Collect Information from Minors?</h2>
        <p>
          <em><strong>In Short:</strong> We do not knowingly collect data from or market to children under 13 years of age.</em>
        </p>
        <p>
          We do not knowingly solicit data from or market to children under 13 years of age. By using the Services, you represent that you
          are at least 13 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
          If we learn that personal information from users less than 13 years of age has been collected, we will deactivate the account and
          take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from
          children under age 13, please contact us at <a href="mailto:support@focusair.app">support@focusair.app</a>.
        </p>

        <h2>13. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at <a href="mailto:support@focusair.app">support@focusair.app</a> or contact us by post at:
        </p>
        <p>
          <strong>Yan Smaliak</strong><br />
          Al. Ujazdowskie 24, 23<br />
          Warsaw, Masovian 00-478<br />
          Poland
        </p>

        <h2>14. How Can You Review, Update, or Delete the Data We Collect from You?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you,
          change that information, or delete it. To request to review, update, or delete your personal information, please contact us at{" "}
          <a href="mailto:support@focusair.app">support@focusair.app</a>.
        </p>
        <p>
          Since your app data is stored locally and in iCloud, you have full control over it:
        </p>
        <ul>
          <li>Delete local data by uninstalling the App</li>
          <li>Manage iCloud data through your device settings</li>
          <li>Request deletion of analytics data by contacting us</li>
        </ul>
      </article>
    </div>
  );
}
