interface ProjectItem {
  title: string;
  description: string;
  tech_stack: string[];
  github: string;
  deployed_link: string;
  image: string;
}

export const projects: ProjectItem[] = [
  {
    "title": "Flagright Visualizer - Fraud Detection System",
    "description": "Interactive dashboard for fraud analysis with graph-based visualizations, enabling detection of user relationships and fraud rings using shortest-path detection.",
    "tech_stack": ["Next.js", "TypeScript", "Neo4j", "Cytoscape.js", "TailwindCSS"],
    "github": "https://github.com/Harsh2563/flagright-frontend",
    "deployed_link": "https://flagright-frontend.vercel.app/",
    "image": "/flagright.png"
  },
  {
    "title": "DrizLink - A P2P File Sharing App",
    "description": "A LAN-based peer-to-peer file sharing and real-time chat application developed in Golang which supports seamless transfer of both individual files and entire folders between devices connected on the same network.",
    "tech_stack": ["Golang", "TCP"],
    "github": "https://github.com/Harsh2563/DrizLink_Cli",
    "deployed_link": "",
    "image": "/drizlink.png"
  },
  {
    "title": "Notify - A Note Managing App",
    "description": "Feature-rich note-taking platform built for the college community, enabling users to create and share notes with peers. Supports enriched content via PDF uploads and integrates AI to assist users with content generation and summarization.",
    "tech_stack": ["React", "TypeScript", "CSS", "Appwrite", "Tiptap Editor", "OpenAI"],
    "github": "https://github.com/Rahull004/Notify",
    "deployed_link": "https://notify-bay-phi.vercel.app/",
    "image": "/notify.png"
  },
  {
    "title": "Mood - Journal Application",
    "description": "Journaling platform that allows users to track their emotional well-being over time using AI-powered sentiment analysis and visual reports using Recharts.",
    "tech_stack": ["Next.js", "TypeScript", "Prisma", "PlanetScale", "OpenAI", "Langchain", "Recharts"],
    "github": "https://github.com/Harsh2563/Mood",
    "deployed_link": "",
    "image": "/mood.png"
  },
  {
    "title": "Infotsav 2024 Website",
    "description": "Official website for Infotsav, the techno-managerial fest of IIIT Gwalior, showcasing events, registrations, and media for thousands of annual visitors.",
    "tech_stack": ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    "github": "https://github.com/Infotsav/Infotsav-24_Frontend",
    "deployed_link": "https://infotsav.in",
    "image": "/infotsav.png"
  }
];