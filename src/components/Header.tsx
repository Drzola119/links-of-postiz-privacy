import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 hover:opacity-80 transition-opacity">
          ADSIFY
        </Link>
        <nav className="hidden sm:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
            Privacy
          </Link>
          <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">
            Terms
          </Link>
          <Link href="/data-deletion" className="hover:text-slate-900 transition-colors">
            Deletion
          </Link>
        </nav>
      </div>
    </header>
  );
}
