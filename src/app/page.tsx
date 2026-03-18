import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
        Adsify Legal Information
      </h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
        Adsify is a powerful social media automation tool for TikTok, YouTube, and Pinterest. 
        Read our legal documents below to understand how we protect your data and our terms of use.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link 
          href="/privacy-policy" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm"
        >
          Privacy Policy
        </Link>
        <Link 
          href="/terms-of-service" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm"
        >
          Terms of Service
        </Link>
      </div>

      <div className="mt-24 pt-12 border-t border-slate-100">
        <p className="text-sm text-slate-500">
          Looking for the main app? Visit <a href="https://adsify.space" className="text-slate-900 font-medium hover:underline">adsify.space</a>
        </p>
      </div>
    </div>
  );
}
