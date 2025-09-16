export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  codeUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: "completed" | "in-development" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "moneyboard",
    title: "MoneyBoard",
    description:
      "Budgeting app that helps you manage your expenses and track your income.",
    image: "/images/projects/moneyboard-mockDrop-iMac.jpg",
    demoUrl: "https://moneyboard-website.vercel.app/",
    featured: true,
    status: "completed",
  },
  {
    id: "aurux-design",
    title: "My Web Design Agency",
    description:
      "Complete e-commerce platform with Next.js, Stripe payment integration and admin panel. Responsive and modern design.",
    image: "/images/projects/aurux-design-hero.jpg",
    codeUrl: "",
    demoUrl: "https://auruxdesign.com/",
    featured: true,
    status: "completed",
  },
  {
    id: "chrome-extension",
    title: "Music Chrome Extension",
    description:
      "Chrome extension for musical tuning developed with React JS. Useful tool for musicians who need to tune their instruments quickly and accurately.",
    image: "/images/projects/true-resonance-presentation-img.png",
    demoUrl:
      "https://chromewebstore.google.com/detail/true-resonance/fbjmobmlgofjclebagmnabejchajaifm",
    codeUrl: "https://github.com/RafaCMur/true-resonance",
    featured: true,
    status: "completed",
  },
  {
    id: "vscode-theme",
    title: "VSCode Theme",
    description:
      "Custom theme for Visual Studio Code designed to reduce eye strain during long programming sessions.",
    image: "/images/projects/retina-vscode-theme.jpg",
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=RafaCMur.retina",
    codeUrl: "https://github.com/RafaCMur/retina",
    featured: true,
    status: "completed",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with Astro, featuring responsive design and optimized performance.",
    image: "/images/projects/astro-portfolio-about.jpg",
    codeUrl: "https://github.com/RafaCMur/astro-portfolio-rafa",
    featured: true,
    status: "completed",
  },
  {
    id: "auth-screens",
    title: "Auth Screens",
    description:
      "Complete mobile application with authentication screens, developed with React Native and Expo. Includes login, registration and user management.",
    image: "/images/projects/auth-screens-react-native-welcome-cropped.jpg",
    codeUrl: "https://github.com/RafaCMur/auth-screens-react-native",
    demoUrl:
      "https://drive.google.com/drive/folders/1vd-xsVqwOO-rSTbotLDocccvpFipFFTS?usp=drive_link",
    featured: true,
    status: "completed",
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projects;
};
