import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © {currentYear} Adsify. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
