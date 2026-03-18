export default function TermsOfService() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <header className="mb-16 border-b border-slate-100 pb-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-500 font-medium">Effective Date: March 18, 2026</p>
      </header>

      <div className="space-y-16 text-slate-800 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">1</span>
            Acceptance
          </h2>
          <p>
            By accessing or using Adsify ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">2</span>
            Platform Compliance
          </h2>
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 mb-4">
            <p className="text-amber-900 font-medium">
              Important: You must comply with all policies of connected platforms, including TikTok, YouTube, and Pinterest.
            </p>
          </div>
          <p>
            Adsify utilizes official APIs. By using our service, you also agree to the respective Terms of Service of each social media platform. We do not bypass API limits or engage in automated interactions that violate platform policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">3</span>
            Prohibited Uses
          </h2>
          <p className="mb-6 text-slate-600">To maintain a safe community, you agree not to use Adsify for:</p>
          <ul className="space-y-4">
            {['Spam or unsolicited automated content', 'Copyright violation or intellectual property theft', 'Illegal content, hate speech, or harassment', 'Malware distribution or interference with service security'].map(item => (
              <li key={item} className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <span className="text-slate-900 font-semibold uppercase text-xs tracking-wider">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer & Liability</h2>
          <p className="text-sm uppercase tracking-tight opacity-70 mb-4">Legal Notice</p>
          <p className="text-slate-600 mb-4">
            The Service is provided "as is" without warranties of any kind. Adsify Team shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">4</span>
            Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your account at any time for violations of these terms or for conduct we deem harmful to our users or business interests.
          </p>
        </section>

        <footer className="mt-20 pt-12 border-t border-slate-100">
          <p className="text-slate-900 font-bold mb-4 italic leading-loose">
            Questions? We're here to help.
          </p>
          <a 
            href="mailto:support@adsify.space" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:scale-[1.02]"
          >
            support@adsify.space
          </a>
        </footer>
      </div>
    </article>
  );
}
