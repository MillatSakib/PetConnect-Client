import { NavLink } from "react-router-dom";

const Policy = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen p-5 md:p-10">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 md:p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
          <p className="mb-4">
            Personally identifiable information, such as your name, shipping
            address, email address, and telephone number, and demographic
            information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the Site or when
            you choose to participate in various activities related to the Site,
            such as online chat and message boards.
          </p>
          <p className="mb-4">
            Financial information (such as data related to your payment method,
            e.g., valid credit card number, card brand, expiration date) that we
            may collect when you purchase, order, return, exchange, or request
            information about our services from the Site. We store only very
            limited, if any, financial information that we collect.
          </p>
          <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
          <p className="mb-4">
            Information our servers automatically collect when you access the
            Site, such as your IP address, your browser type, your operating
            system, your access times, and the pages you have viewed directly
            before and after accessing the Site.
          </p>
          <h3 className="text-xl font-semibold mb-2">Mobile Device Data</h3>
          <p className="mb-4">
            Device information, such as your mobile device ID, model, and
            manufacturer, and information about the location of your device if
            you access the Site from a mobile device.
          </p>
          <h3 className="text-xl font-semibold mb-2">Third-Party Data</h3>
          <p className="mb-4">
            Information from third parties, such as personal information or
            network friends, if you connect your account to the third party and
            grant the Site permission to access this information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Use of Your Information
          </h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Create and manage your account.</li>
            <li>
              Process your transactions and send you related information,
              including purchase confirmations and invoices.
            </li>
            <li>
              Send you administrative information, such as information regarding
              the Site and changes to our terms, conditions, and policies.
            </li>
            <li>Provide customer support.</li>
            <li>
              Communicate with you about our products, services, offers,
              promotions, and events.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>
              Protect against, identify, and prevent fraud and other unlawful
              activity.
            </li>
            <li>
              Facilitate account creation and logon process if you choose to
              connect your account with us to a third-party account.
            </li>
            <li>Send you a newsletter.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Disclosure of Your Information
          </h2>
          <p className="mb-4">
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-xl font-semibold mb-2">
            By Law or to Protect Rights
          </h3>
          <p className="mb-4">
            If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-xl font-semibold mb-2">Business Transfers</h3>
          <p className="mb-4">
            We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to
            another company.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Third-Party Service Providers
          </h3>
          <p className="mb-4">
            We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Marketing Communications
          </h3>
          <p className="mb-4">
            With your consent, or with an opportunity for you to withdraw
            consent, we may share your information with third parties for
            marketing purposes, as permitted by law.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Interactions with Other Users
          </h3>
          <p className="mb-4">
            If you interact with other users of the Site, those users may see
            your name, profile photo, and descriptions of your activity,
            including sending invitations to other users, chatting with other
            users, liking posts, and following blogs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Security of Your Information
          </h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other types of misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Policy for Children
          </h2>
          <p className="mb-4">
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you believe we might have any information from or about
            a child under 13, please contact us at [Insert Contact Email].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Options Regarding Your Information
          </h2>
          <h3 className="text-xl font-semibold mb-2">Account Information</h3>
          <p className="mb-4">
            You may at any time review or change the information in your account
            or terminate your account by logging into your account settings and
            updating your profile.
          </p>
          <p className="mb-4">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, some information may be retained in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with legal requirements.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Emails and Communications
          </h3>
          <p className="mb-4">
            If you no longer wish to receive correspondence, emails, or other
            communications from us, you may opt-out by:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Noting your preferences at the time you register your account with
              the Site.
            </li>
            <li>
              Logging into your account settings and updating your preferences.
            </li>
            <li>Contacting us using the contact information provided below.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p className="mb-2">Petconnect</p>
          <p className="mb-2">456 Oak Street, Springfield, IL, 62701, USA</p>
          <p className="mb-2">Email: info@petconnect.com</p>
          <p className="mb-2">Phone: +1(123) 456-7890</p>
        </section>
        <div>
          Read our Terms & Conditions{" "}
          <NavLink
            to={"/terms&condition"}
            className="cursor-pointer text-blue-600 dark:text-blue-400 font-bold"
          >
            From Here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Policy;
