import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-100 bg-white py-20 mt-auto">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-black tracking-tighter text-slate-900">ADSIFY</span>
            <p className="text-sm text-slate-400 font-medium whitespace-nowrap">
              © {currentYear} Adsify Team. All rights reserved.
            </p>
          </div>
          <div className="flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="hover:text-slate-900 transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
