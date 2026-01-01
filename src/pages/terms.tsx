import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms - FocusAir";
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article className="prose">
        <p className="text-sm text-gray-500 mb-2">Last updated: January 1, 2026</p>
        <h1>Terms &amp; Conditions</h1>

        <h2>Agreement to Our Legal Terms</h2>
        <p>
          We are Yan Smaliak ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"),
          a company registered in Poland at Al. Ujazdowskie 24, 23, Warsaw, Masovian 00-478.
        </p>
        <p>
          We operate the mobile application FocusAir (the "<strong>App</strong>"), as well as any other related products
          and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively, the "<strong>Services</strong>").
        </p>
        <p>
          FocusAir is a focus and productivity application that helps users manage their time and improve concentration.
          The App stores your data locally on your device and may sync via iCloud, which is managed by Apple Inc.
          We do not maintain user accounts or store your focus session data on our servers, and we process limited analytics and subscription
          metadata as described in our Privacy Policy.
        </p>
        <p>
          FocusAir provides general productivity tools and is not a medical, therapeutic, or professional service. We do not guarantee any
          specific outcomes, and the Services are not intended for safety-critical or emergency use.
        </p>
        <p>
          You can contact us by email at <a href="mailto:support@focusair.app">support@focusair.app</a> or by mail to
          Al. Ujazdowskie 24, 23, Warsaw, Masovian 00-478, Poland.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity
          ("<strong>you</strong>"), and Yan Smaliak, concerning your access to and use of the Services. You agree that by accessing
          the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH
          ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly
          incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these
          Legal Terms from time to time. We will alert you about any changes by updating the "Last updated" date of these Legal Terms,
          and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review
          these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and
          to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised
          Legal Terms are posted.
        </p>
        <p>
          The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which
          they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian
          to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you
          using the Services.
        </p>
        <p>
          We recommend that you print a copy of these Legal Terms for your records.
        </p>

        <h2>1. Our Services</h2>
        <p>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any
          jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to
          any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services
          from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws,
          you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <h3>Our intellectual property</h3>
        <p>
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases,
          functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the
          "<strong>Content</strong>"), as well as the trademarks, service marks, and logos contained therein (the "<strong>Marks</strong>").
        </p>
        <p>
          Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair
          competition laws) and treaties in the United States and around the world.
        </p>
        <p>
          The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.
        </p>
        <h3>Your use of our Services</h3>
        <p>
          Subject to your compliance with these Legal Terms, including the "<a href="#prohibited">PROHIBITED ACTIVITIES</a>" section below,
          we grant you a non-exclusive, non-transferable, revocable license to:
        </p>
        <ul>
          <li>access the Services; and</li>
          <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
        </ul>
        <p>solely for your personal, non-commercial use.</p>
        <p>
          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
        </p>
        <p>
          If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal
          Terms, please address your request to: <a href="mailto:support@focusair.app">support@focusair.app</a>. If we ever grant you the
          permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or
          licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting,
          reproducing, or displaying our Content.
        </p>
        <p>
          We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
        </p>
        <p>
          Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our
          Services will terminate immediately.
        </p>

        <h2 id="prohibited">3. Prohibited Activities</h2>
        <p>
          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services
          may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
        <p>As a user of the Services, you agree not to:</p>
        <ul>
          <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
          <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
          <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
          <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
          <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          <li>Engage in unauthorized framing of or linking to the Services.</li>
          <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
          <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
          <li>Delete the copyright or other proprietary rights notice from any Content.</li>
          <li>Attempt to impersonate another user or person or use the username of another user.</li>
          <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
          <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
          <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
          <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
          <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
          <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
          <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
          <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
          <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
          <li>Sell or otherwise transfer your profile.</li>
        </ul>

        <h2>4. Mobile Application License</h2>
        <h3>Use License</h3>
        <p>
          If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install
          and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly
          in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not:
        </p>
        <ul>
          <li>except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App;</li>
          <li>make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App;</li>
          <li>violate any applicable laws, rules, or regulations in connection with your access or use of the App;</li>
          <li>remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App;</li>
          <li>use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended;</li>
          <li>make the App available over a network or other environment permitting access or use by multiple devices or users at the same time;</li>
          <li>use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App;</li>
          <li>use the App to send automated queries to any website or to send any unsolicited commercial email; or</li>
          <li>use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.</li>
        </ul>
        <h3>Apple App Store</h3>
        <p>
          The following terms apply when you use the App obtained from the Apple App Store (the "<strong>App Distributor</strong>"). If we
          make the App available through another app store, similar terms may apply.
        </p>
        <ul>
          <li>the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the iOS or iPadOS operating systems and in accordance with the usage rules set forth in the App Distributor's terms of service;</li>
          <li>we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App;</li>
          <li>in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App;</li>
          <li>you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties;</li>
          <li>you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and</li>
          <li>you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.</li>
        </ul>

        <h2>5. Services Management</h2>
        <p>We reserve the right, but not the obligation, to:</p>
        <ul>
          <li>monitor the Services for violations of these Legal Terms;</li>
          <li>take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;</li>
          <li>in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your content or data (if any) or any portion thereof;</li>
          <li>in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and</li>
          <li>otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
        </ul>

        <h2>6. Purchases and Subscriptions</h2>
        <p>
          The Services may offer in-app purchases and subscriptions processed through RevenueCat and the Apple App Store. All purchases are
          subject to the App Store's terms and conditions, and payments are handled by Apple.
        </p>
        <p>
          Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period. Your Apple ID account will
          be charged within 24 hours prior to the end of the current period. You can manage and cancel subscriptions in your App Store account
          settings.
        </p>
        <p>
          Free trials, if offered, convert to paid subscriptions unless canceled before the trial ends. Subscription prices may change with
          reasonable notice. Continued use of the Services after a price change constitutes acceptance of the new pricing. Refunds are handled
          according to Apple's refund policies.
        </p>

        <h2>7. Data Storage and iCloud</h2>
        <p>
          Your data is stored locally on your device and may be synced across your devices via Apple's iCloud service. We do not have access
          to your iCloud data. Your use of iCloud is subject to Apple's terms of service and privacy policy.
        </p>
        <p>
          We are not responsible for any data loss that may occur due to device malfunction, iCloud service interruptions, or any other
          circumstances beyond our control.
        </p>

        <h2>8. Third-Party Services</h2>
        <h3>Analytics</h3>
        <p>
          We use PostHog for analytics to understand how users interact with the App and to improve our Services. This data is generally
          pseudonymous and used in aggregate. For more information, see PostHog's privacy policy.
        </p>
        <h3>Payment Processing</h3>
        <p>
          In-app purchases and subscriptions are processed through RevenueCat and Apple's App Store. We receive limited transaction information
          (such as subscription status) but do not have access to your payment card details. Payment processing is subject to Apple's and
          RevenueCat's privacy policies.
        </p>
        <p>
          Third-party services are provided under their own terms and privacy policies. We are not responsible for third-party services or
          their availability.
        </p>

        <h2>9. Privacy Policy</h2>
        <p>
          We care about data privacy and security. Please review our Privacy Policy: <a href="/privacy">/privacy</a>. By using the Services,
          you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised that our service
          providers may process data in the United States, the European Union, or other countries. If you access the Services from any other
          region with laws or requirements governing personal data collection, use, or disclosure that differ from applicable laws in those
          regions, then through your continued use of the Services, you understand your data may be transferred to and processed in those
          jurisdictions.
        </p>

        <h2>10. Term and Termination</h2>
        <p>
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
          LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
          (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
          ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
          YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
          SOLE DISCRETION.
        </p>
        <p>
          If we terminate or suspend your access for any reason, you are prohibited from attempting to access the Services again without our
          permission. In addition to terminating or suspending your access, we reserve the right to take appropriate legal action, including
          without limitation pursuing civil, criminal, and injunctive redress.
        </p>

        <h2>11. Modifications and Interruptions</h2>
        <p>
          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion
          without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third
          party for any modification, price change, suspension, or discontinuance of the Services.
        </p>
        <p>
          We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise,
          update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in connection therewith.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Legal Terms shall be governed by and defined following the laws of Poland. Yan Smaliak and yourself irrevocably consent that
          the courts of Poland shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
        </p>
        <p>
          If you are a consumer in the European Union, you may also benefit from mandatory consumer protection laws in your country of residence,
          and you may bring legal proceedings in connection with these Legal Terms in the courts of your country of residence.
        </p>

        <h2>13. Dispute Resolution</h2>
        <p>
          The European Commission provides an online dispute resolution platform, which you can access at{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
          If you would like to bring this subject to our attention, please contact us.
        </p>

        <h2>14. Corrections</h2>
        <p>
          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions,
          pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and
          to change or update the information on the Services at any time, without prior notice.
        </p>

        <h2>15. Disclaimer</h2>
        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR
          USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
          CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
          (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
          RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
          ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
          THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD
          PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT
          OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE,
          OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED
          WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY
          WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
          PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION
          WHERE APPROPRIATE.
        </p>

        <h2>16. Limitations of Liability</h2>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
          YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY
          CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED
          TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $5.00 USD, WHICHEVER
          IS LESS. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF
          CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
          ADDITIONAL RIGHTS.
        </p>

        <h2>17. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers,
          agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees
          and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any
          breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party,
          including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive
          defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our
          defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to
          this indemnification upon becoming aware of it.
        </p>

        <h2>18. User Data</h2>
        <p>
          We do not store your focus session data on our servers. You are responsible for maintaining your local data and backups (including via
          iCloud). We may maintain limited telemetry or support communications as described in our Privacy Policy. We are not liable for any loss
          or corruption of data caused by device issues, iCloud interruptions, or other circumstances beyond our control.
        </p>

        <h2>19. Electronic Communications, Transactions, and Signatures</h2>
        <p>
          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE
          TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
          RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any
          statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or
          retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
        </p>

        <h2>20. California Users and Residents</h2>
        <p>
          If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California
          95834 or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>

        <h2>21. Miscellaneous</h2>
        <p>
          These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign
          any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or
          failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is
          determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms
          and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or
          agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms
          will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the
          electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
        </p>

        <h2>22. Contact Us</h2>
        <p>
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact
          us at:
        </p>
        <p>
          <strong>Yan Smaliak</strong><br />
          Al. Ujazdowskie 24, 23<br />
          Warsaw, Masovian 00-478<br />
          Poland<br />
          <a href="mailto:support@focusair.app">support@focusair.app</a>
        </p>
      </article>
    </div>
  );
}
