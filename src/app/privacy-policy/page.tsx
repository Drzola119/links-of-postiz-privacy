export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Privacy Policy</h1>
      <p className="text-slate-500 mb-12">Last updated: March 18, 2026</p>

      <div className="space-y-12 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to Adsify ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and share information about you when you use our website (https://adsify.space) and our social media automation tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
          <p className="mb-4">To provide our services, we collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> Email address and username.</li>
            <li><strong>OAuth Tokens:</strong> Connected social media accounts (TikTok, YouTube, Pinterest) official API access tokens.</li>
            <li><strong>User Content:</strong> Video content uploaded for scheduling and posting.</li>
            <li><strong>Usage Data:</strong> Scheduling preferences, IP addresses, and usage analytics.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance user experience and track site usage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Data</h2>
          <p className="mb-4">We use the collected data primarily to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enable you to connect your social media accounts via official APIs.</li>
            <li>Schedule and automatically post video content on your behalf.</li>
            <li>Maintain and optimize our application performance.</li>
            <li>Communicate regarding account updates or support requests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Services</h2>
          <p className="mb-4">Adsify integrates with the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>TikTok API:</strong> To post content to your TikTok account.</li>
            <li><strong>YouTube Data API:</strong> To post content to your YouTube channel.</li>
            <li><strong>Pinterest API:</strong> To post content to your Pinterest boards.</li>
            <li><strong>Vercel:</strong> Our hosting provider.</li>
            <li><strong>Analytics Tools:</strong> To understand how users interact with our platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Storage and Security</h2>
          <p>
            We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. OAuth tokens are encrypted and stored securely. Video content is stored temporarily for the purpose of scheduling and posting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Delete:</strong> Request the deletion of your account and associated data.</li>
            <li><strong>Export:</strong> Request your data in a machine-readable format.</li>
            <li><strong>Withdraw Consent:</strong> Revoke API access through your social media account settings at any time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
          <p>
            Adsify is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child under 13 has provided us with personal data, we will take steps to delete such information. (COPPA compliant).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. GDPR and International Rights</h2>
          <p>
            We respect the rights of users under the General Data Protection Regulation (GDPR). Our data processing activities are based on the necessity to perform our contract with you or our legitimate interests in providing our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Retention Policy</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to provide our services. We will delete your data upon request or after a prolonged period of inactivity, subject to legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
          <p>
            For any questions, data deletion requests, or concerns regarding your privacy, please contact us at:
          </p>
          <p className="mt-2 font-medium">Email: support@adsify.space</p>
        </section>
      </div>
    </div>
  );
}
