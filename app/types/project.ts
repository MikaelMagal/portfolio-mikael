export type Project = {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
  demoUrl?: string;
  status: "concluido" | "em-desenvolvimento";
  featured?: boolean;
};