import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

// document.getElementById("year").textContent = new Date().getFullYear();

const PrivacyPolicy = () => {
  return (
    <>
     
<Slider/>
      <main class="max-w-6xl mx-auto px-6 py-12">
        <section id="hero" class="mb-10">
          <div class="bg-white rounded-2xl shadow p-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 class="text-2xl md:text-3xl font-extrabold leading-tight">
                Privacy & Service Policy
              </h2>
              <p class="mt-2 text-gray-600 max-w-2xl">
                This page explains how{" "}
                <span class="font-semibold">Healtho</span> protects your
                information and the rules around the Healtho Service Card and
                discounts.
              </p>
            </div>
            <div class="mt-6 md:mt-0">
              <div class="inline-flex items-center gap-3">
                <span class="px-3 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm">
                  Discounts for Customers
                </span>
                <span class="px-3 py-2 rounded-full bg-purple-50 text-purple-700 text-sm">
                  Service-based Offers
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">Overview</h3>
            <p class="mt-3 text-gray-600">
              Healtho provides discounts to customers depending on the type of
              service used (for example: consultations, treatments, or medical
              tests). The Healtho Service Card may be used at participating
              companies to receive discounts on eligible services. Healtho
              provides discounts only — it does not provide medical care itself.
            </p>
          </div>
        </section>

        <section id="privacy" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">Privacy & Security</h3>
            <div class="mt-4 grid gap-4 md:grid-cols-1">
              <div>
                <h4 class="font-medium">Keep your card secure</h4>
                <p class="text-gray-600 mt-1">
                  You are responsible for keeping your Healtho Service Card
                  secure. Protect the card from loss, theft, or unauthorized
                  use. Treat it like any other valuable card or ID.
                </p>
              </div>

              {/* <div>
                <h4 class="font-medium">Access control</h4>
                <p class="text-gray-600 mt-1">
                  Only authorized personnel — such as verified healthcare
                  providers and Healtho staff — may access your personal
                  information. This may include limited financial identifiers
                  necessary to process discounts or refunds, such as linked bank
                  account numbers when required for refunds or verifications.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        <section id="payments" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">Payments & Refunds</h3>
            <p class="mt-3 text-gray-600">
              1. When you use your Healtho Service Card, discounts are applied
              according to the partner company's pricing and the type of
              service. Healtho will refund the total discount amount to the
              customer within <strong>3 days</strong> of the transaction,
              subject to partner verification and applicable terms.
            </p>

            <div class="mt-4">
              {/* <h4 class="font-medium">Hospital verification</h4> */}
              <p class="text-gray-600 mt-1">
                2. Only authorized personnel — such as verified healthcare
                providers and Easy Healtho staff — may access your personal
                information. This may include limited financial identifiers
                necessary to process discounts or refunds, such as linked bank
                account numbers when required for refunds or verifications.
              </p>
            </div>
            {/* <div class="mt-4">
              <h4 class="font-medium">Hospital verification</h4>
              <p class="text-gray-600 mt-1">
                Partner hospitals or clinics may be required to send policy and
                agreement verification to Healtho to confirm the discount and
                process refunds. Processing times may vary based on partner
                response.
              </p>
            </div> */}
          </div>
        </section>

        <section id="auth" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">Account Security</h3>
            <p class="mt-3 text-gray-600">
              To access your Easy Healtho account and use the service card you
              will be provided a Log-in ID and password. Keep these credentials
              safe. Do not share them. If you suspect unauthorized access,
              contact Easy Healtho support immediately.
            </p>
          </div>
        </section>

        <section id="emergency" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">Emergency & Critical Care</h3>
            <p class="mt-3 text-gray-600">
              If a customer using Healtho or a partner hospital faces a critical
              medical condition, there will be <strong>no restrictions</strong>{" "}
              on receiving emergency care. Healtho's discount policy will not
              interfere with or delay emergency medical treatment.
            </p>
          </div>
        </section>

        <section id="rules" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold">
              Rules Applied by Easy Healtho Services
            </h3>
            <ul class="mt-3 space-y-2 text-gray-600 list-disc pl-5">
              <li>
                Easy Healtho only provides discounts on eligible services; it is
                not a provider of medical treatment.
              </li>
              <li>
                Discounts are applied based on service type (consultation,
                treatment, test) and partner terms.
              </li>
              <li>
                Use of the Healtho Service Card is subject to partner
                verification and Easy Healtho's policies.
              </li>
              <li>
                Easy Healtho reserves the right to change discount offers,
                processing times, or partner participation with notice.
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" class="mb-8">
          <div class="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 class="text-lg font-semibold">Questions?</h3>
              <p class="text-gray-600 mt-1">
                If you have any questions about this policy or your Easy Healtho
                Service Card, contact our support team.
              </p>
            </div>
            <div class="mt-4 md:mt-0">
              <Link to="/Contact">
                <a
                  href="#"
                  class="inline-block px-5 py-3 rounded-lg bg-cyan-600 text-white font-medium shadow"
                >
                  Contact Support
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
