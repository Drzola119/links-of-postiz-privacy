export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <header className="mb-16 border-b border-slate-100 pb-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 font-medium">Effective Date: March 18, 2026</p>
      </header>

      <div className="space-y-16 text-slate-800 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">1</span>
            Introduction
          </h2>
          <p>
            Welcome to Adsify ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and share information about you when you use our website (https://adsify.space) and our social media automation tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">2</span>
            Data We Collect
          </h2>
          <p className="mb-6">To provide our services, we collect the following types of information:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <strong className="block text-slate-900 mb-1">Account Information</strong>
              <span className="text-sm text-slate-600">Email address and username for authentication.</span>
            </li>
            <li className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <strong className="block text-slate-900 mb-1">OAuth Tokens</strong>
              <span className="text-sm text-slate-600">Official API access tokens for TikTok, YouTube, and Pinterest.</span>
            </li>
            <li className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <strong className="block text-slate-900 mb-1">User Content</strong>
              <span className="text-sm text-slate-600">Video content uploaded for scheduling and posting.</span>
            </li>
            <li className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
              <strong className="block text-slate-900 mb-1">Usage Data</strong>
              <span className="text-sm text-slate-600">Scheduling preferences, IP addresses, and analytics.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">3</span>
            How We Use Data
          </h2>
          <div className="bg-slate-900 text-slate-50 p-8 rounded-2xl shadow-xl mb-6">
            <p className="mb-4 font-medium italic opacity-90">"Our mission is to help you automate your growth safely."</p>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Connect social accounts via official APIs only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Schedule and post video content on your behalf.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Optimize application performance and reliability.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">4</span>
            Third-Party Services
          </h2>
          <p className="mb-6">Adsify integrates with official platform APIs to ensure security and compliance:</p>
          <div className="flex flex-wrap gap-3">
            {['TikTok API', 'YouTube Data API', 'Pinterest API', 'Vercel', 'Google Analytics'].map(service => (
              <span key={service} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold text-sm shadow-sm">
                {service}
              </span>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
          <p className="text-slate-600">
            We implement industry-standard security measures. OAuth tokens are encrypted and stored in an isolated environment. Video content is removed from our temporary cache immediately after successful posting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">5</span>
            Contact Us
          </h2>
          <p className="mb-6">If you have any questions or would like to request data deletion, please reach out to our team:</p>
          <a 
            href="mailto:ads@trustiify.agency" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:scale-[1.02]"
          >
            ads@trustiify.agency
          </a>
        </section>
      </div>
    </article>
  );
}
