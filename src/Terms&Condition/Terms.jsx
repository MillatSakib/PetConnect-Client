import React from "react";
import { NavLink } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen p-5 md:p-10">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 md:p-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Introduction
          </h2>
          <p className="font-semibold mb-4">
            Welcome to PetConnect. These Terms and Conditions govern your use of
            our website and services. By accessing or using our website, you
            agree to be bound by these Terms. If you do not agree with any part
            of these Terms, please do not use our website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            1. Definitions
          </h3>
          <p className="mb-4">
            <span className="font-semibold">User:</span> Any person who accesses
            and uses the website.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Adopter:</span> A user who adopts a
            pet through our website.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Pet:</span> Any animal listed for
            adoption on our website.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Service:</span> The pet adoption
            services and any other services provided by us through the website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            2. Eligibility
          </h3>
          <p>
            To use our website, you must be at least 18 years old and legally
            capable of entering into binding contracts. By using our website,
            you represent and warrant that you meet these eligibility
            requirements.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            3. User Responsibilities
          </h3>
          <h4 className="text-lg font-semibold mb-2">Account Registration</h4>
          <p className="mb-4">
            You may need to create an account to access certain features of our
            website. You are responsible for maintaining the confidentiality of
            your account information and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account.
          </p>

          <h4 className="text-lg font-semibold mb-2">Accurate Information</h4>
          <p className="mb-4">
            You agree to provide accurate, current, and complete information
            during the registration process and to update such information to
            keep it accurate, current, and complete.
          </p>

          <h4 className="text-lg font-semibold mb-2">Prohibited Activities</h4>
          <p className="mb-4">
            You agree not to use the website for any unlawful or prohibited
            activities, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Impersonating any person or entity, or falsely stating or
              otherwise misrepresenting your affiliation with a person or
              entity.
            </li>
            <li>
              Using the website in any manner that could damage, disable,
              overburden, or impair the website.
            </li>
            <li>
              Uploading, posting, or otherwise transmitting any content that is
              unlawful, harmful, threatening, abusive, defamatory, vulgar,
              obscene, or otherwise objectionable.
            </li>
            <li>
              Violating any applicable local, state, national, or international
              law.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            4. Adoption Process
          </h3>
          <h4 className="text-lg font-semibold mb-2">Application</h4>
          <p className="mb-4">
            To adopt a pet, you must complete an adoption application. The
            application process may include an interview, home visit, and other
            checks as deemed necessary by us.
          </p>

          <h4 className="text-lg font-semibold mb-2">Approval</h4>
          <p className="mb-4">
            Approval of adoption applications is at our sole discretion. We
            reserve the right to refuse any application for any reason.
          </p>

          <h4 className="text-lg font-semibold mb-2">Adoption Fees</h4>
          <p className="mb-4">
            Adoption fees help cover the costs of caring for the pets. Fees are
            non-refundable and must be paid in full before the adoption is
            finalized.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            5. Intellectual Property
          </h3>
          <h4 className="text-lg font-semibold mb-2">Ownership</h4>
          <p className="mb-4">
            All content on the website, including but not limited to text,
            graphics, logos, images, and software, is the property of PetConnect
            or its content suppliers and is protected by intellectual property
            laws.
          </p>

          <h4 className="text-lg font-semibold mb-2">Limited License</h4>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable, and
            revocable license to access and use the website for personal and
            non-commercial purposes. This license does not include any resale or
            commercial use of the website or its contents.
          </p>

          <h4 className="text-lg font-semibold mb-2">Restrictions</h4>
          <p className="mb-4">
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, or otherwise use the content
            on the website without our prior written permission.
          </p>
        </section>
        <div>
          Read our Privacy & Policy{" "}
          <NavLink
            to={"/policy"}
            className="cursor-pointer text-blue-600 dark:text-blue-400 font-bold"
          >
            From Here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Terms;
