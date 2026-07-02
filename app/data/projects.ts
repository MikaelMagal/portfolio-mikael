import { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    description:
      "Chat de conversas em tempo real construído com Next.js e Socket.IO, com troca instantânea de mensagens entre usuários.",
    techs: ["Next.js", "TypeScript", "Socket.IO"],
    githubUrl: "https://github.com/MikaelMagal/Realtime-chat",
    status: "concluido",
    featured: true,
  },
  {
    slug: "study-tracker",
    title: "Study Tracker",
    description:
      "Aplicação para organizar e padronizar sessões de estudo, matérias e nível de dificuldade, com acompanhamento de progresso.",
    techs: ["PHP", "Laravel", "MySQL"],
    githubUrl: "https://github.com/MikaelMagal/study-tracker",
    status: "concluido",
  },
  // Comentado pois o projeto ainda não está pronto para ser apresentado no portfólio
  // {
  //   slug: "ordem-theory",
  //   title: "Ordem Theory",
  //   description: "Rede social de teorias e mural investigativo para o RPG Ordem Paranormal.",
  //   techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "React Flow"],
  //   githubUrl: "https://github.com/MikaelMagal/ordem-theory",
  //   status: "em-desenvolvimento",
  //   featured: true,
  // },
];