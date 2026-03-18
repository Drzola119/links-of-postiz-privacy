import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Adsify
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </header>
  );
}
