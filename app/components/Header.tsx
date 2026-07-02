export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-emerald-400 text-sm">mikael.dev</span>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#projetos" className="hover:text-emerald-400 transition-colors">Projetos</a>
        </div>
      </nav>
    </header>
  );
}