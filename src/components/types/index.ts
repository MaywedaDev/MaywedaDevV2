export type Project = {
  name: string;
  image: string;
  link: string;
  desc?: string;
  intro?: string;
  icons: string[];
  git: string;
  type: ("android" | "ios" | "frontend" | "backend")[];
};
