import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Official Legal Documentation
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
        LEGAL <span className="text-slate-400">CENTER.</span>
      </h1>
      
      <p className="text-xl text-slate-500 mb-16 max-w-2xl font-medium leading-relaxed">
        Understand how Adsify protects your data and manages your social media automation safely through our official terms and privacy policies.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
        <Link 
          href="/privacy-policy" 
          className="group flex flex-col items-center p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <span className="text-2xl font-bold text-slate-900 mb-2">Privacy Policy</span>
          <span className="text-sm text-slate-400 group-hover:text-indigo-500 transition-colors">Read Policy →</span>
        </Link>
        <Link 
          href="/terms-of-service" 
          className="group flex flex-col items-center p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <span className="text-2xl font-bold text-slate-900 mb-2">Terms of Service</span>
          <span className="text-sm text-slate-400 group-hover:text-indigo-500 transition-colors">Read Terms →</span>
        </Link>
      </div>

      <div className="mt-32 pt-16 border-t border-slate-100 w-full max-w-3xl">
        <p className="text-sm text-slate-400 font-medium">
          Ready to automate your growth? 
          <a href="https://adsify.space" className="text-slate-900 ml-2 hover:underline decoration-2 underline-offset-4">Visit adsify.space</a>
        </p>
      </div>
    </div>
  );
}
