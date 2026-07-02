export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
        <span>© 2026 - Mikael Vieira Magalhães</span>
        <div className="flex gap-4">
          <a href="mailto:mikaelmagalhaes28@email.com" className="hover:text-emerald-400 transition-colors">
            Email
          </a>
          <a href="https://github.com/MikaelMagal" target="_blank" className="hover:text-emerald-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mikael-vieira-42b997266" target="_blank" className="hover:text-emerald-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}