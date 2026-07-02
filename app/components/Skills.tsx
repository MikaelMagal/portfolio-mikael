const skills = [
  "PHP", "Laravel", "Java", "TypeScript", "JavaScript", "Node.js",
  "Next.js", "Python", "PostgreSQL", "MySQL", "Docker", "Git/GitHub",
  "APIs REST", "Moodle",
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full border border-slate-700 text-slate-300 text-sm font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}