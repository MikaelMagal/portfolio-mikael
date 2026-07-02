import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-slate-800 rounded-lg p-5 hover:border-emerald-400/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-slate-100">{project.title}</h3>
              {project.status === "em-desenvolvimento" && (
                <span className="text-xs font-mono text-amber-400 border border-amber-400/30 rounded px-2 py-0.5">
                  em desenvolvimento
                </span>
              )}
            </div>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techs.map((tech) => (
                <span key={tech} className="text-xs font-mono text-emerald-400">
                  #{tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                GitHub →
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  Ver Projeto →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}