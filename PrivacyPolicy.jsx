import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">eSIMCamel Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: June 12, 2025</p>

      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-6">
        eSIMCamel is committed to respecting and protecting your privacy. This Policy explains the collection, usage, and protection of your personal data while using our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
      <p className="mb-2">We collect:</p>
      <ul className="list-disc list-inside mb-6 ml-4">
        <li>Account info: name, email, phone, company</li>
        <li>Usage data: API calls, service logs, IP addresses, device/browser info</li>
        <li>Communications: email for support, billing, security</li>
      </ul>
      <p className="mb-6">We also use cookies and similar on our web interface.</p>

      <h2 className="text-2xl font-semibold mb-4">3. Use of Data</h2>
      <p className="mb-2">Your data helps us to:</p>
      <ul className="list-disc list-inside mb-6 ml-4">
        <li>Provide and operate services</li>
        <li>Process billing and payments</li>
        <li>Communicate with you (service notices, account updates)</li>
        <li>Personalize your experience and for marketing (only with consent)</li>
        <li>Maintain security, prevent fraud, conduct analytics</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
      <p className="mb-2">We may share data with:</p>
      <ul className="list-disc list-inside mb-6 ml-4">
        <li>Service providers (e.g., payment processors)</li>
        <li>Legal authorities when required</li>
        <li>Affiliates or third parties when processing is required or consented</li>
      </ul>
      <p className="mb-6">We do not sell personal data to third parties.</p>

      <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <p className="mb-2">Depending on applicable laws, you may have the rights to:</p>
      <ul className="list-disc list-inside mb-6 ml-4">
        <li>Access, correct, delete your personal data</li>
        <li>Object or restrict processing</li>
        <li>Receive a copy of your data (“data portability”)</li>
        <li>Withdraw consent for marketing</li>
      </ul>
      <p className="mb-6">To exercise rights, contact us at privacy@esimcamel.com.</p>

      <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
      <p className="mb-6">
        We store personal data only as long as needed for service provision or legal compliance, then delete or anonymize it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
      <p className="mb-6">
        We implement reasonable safeguards: encryption, access controls, intrusion detection, etc. We cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
      <p className="mb-6">
        Your data may be processed or stored outside your country. We ensure compliance with data protection laws via mechanisms such as standard contractual clauses.
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Children</h2>
      <p className="mb-6">
        Our services are not directed at children under 16. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Policy Updates</h2>
      <p className="mb-6">
        This Policy may be updated; material changes will be communicated before taking effect. Most recent revision date is noted.
      </p>

      <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
      <p className="mb-6">
        For questions or requests about privacy, reach out to:
        <a href="mailto:privacy@esimcamel.com" className="text-blue-600 hover:underline">privacy@esimcamel.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;

