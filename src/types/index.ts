export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
}

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  description: string;
}
