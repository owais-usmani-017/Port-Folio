export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "hero" | "project";
  technologies: string[];
  description: string;
  highlights: string[];
  featured?: boolean;
  github?: string;
  live?: string;
  image?: string;
}
