import React from 'react';

export default function DataDeletion() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <header className="mb-16 border-b border-slate-100 pb-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">User Data Deletion Policy</h1>
        <p className="text-slate-500 font-medium whitespace-nowrap">Effective Date: March 25, 2026</p>
      </header>

      <div className="space-y-16 text-slate-800 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">1</span>
            How to Delete Your Data
          </h2>
          <p>
            Adsify is committed to protecting your privacy. If you have connected your social media accounts to our Postiz app or n8n workflows and wish to remove our app&apos;s access or delete your data, please follow the steps below:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">2</span>
            Removing Access via Social Platforms
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <strong className="block text-slate-900 mb-2">Facebook & Instagram</strong>
              <p className="text-slate-600 text-base">
                Go to <span className="font-semibold">Facebook Settings &gt; Apps and Websites</span>. Find <span className="font-bold">&quot;Adsify&quot;</span> and click <span className="font-semibold">&quot;Remove&quot;</span>.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <strong className="block text-slate-900 mb-2">TikTok</strong>
              <p className="text-slate-600 text-base">
                Go to <span className="font-semibold">TikTok Settings &gt; Security &gt; Manage app permissions</span>. Find <span className="font-bold">&quot;Adsify&quot;</span> and select <span className="font-semibold">&quot;Remove access&quot;</span>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold">3</span>
            Requesting Full Data Deletion
          </h2>
          <p className="mb-8">To completely erase all your data from our servers, email our support team:</p>
          <div className="bg-slate-900 text-slate-50 p-8 rounded-2xl shadow-xl space-y-4">
             <div className="flex flex-col gap-1">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider">Email Support</span>
                <a href="mailto:ads@trustiify.agency" className="text-xl font-bold hover:text-indigo-300 transition-colors underline decoration-indigo-500 underline-offset-4 decoration-2">
                  ads@trustiify.agency
                </a>
             </div>
             <div className="space-y-2 text-slate-300">
               <p><strong className="text-white">Subject:</strong> Data Deletion Request</p>
               <p><strong className="text-white">Required Info:</strong> Include the email address associated with your account.</p>
             </div>
          </div>
          <p className="mt-8 text-slate-500 italic font-medium">
            We will permanently delete your stored data within 3-5 business days.
          </p>
        </section>
      </div>
    </article>
  );
}
