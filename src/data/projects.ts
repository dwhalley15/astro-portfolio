
import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}",
  { eager: true }
);

export function projectImage(path: string): ImageMetadata {
  const image = images[`/src/assets/projects/${path}`];

  if (!image) {
    throw new Error(`Project image not found: ${path}`);
  }

  return image.default;
}

export type ProjectCategory = "personal" | "academic";

export interface ProjectMedia {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  year: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  featured: boolean;

  detail?: {
    github?: string;
    live?: string;
    media: ProjectMedia[];
    sections: {
      heading: string;
      text: string;
    }[];
  };

  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export const projects: Project[] = [
    {
        slug: "living-world-quest-board",
        name: "Living World Quest Board",
        year: "2026",
        category: "personal",
        description:"D&D quest management for DMs and players. Create characters, form adventuring groups, claim quests, and track adventures from unclaimed to completed.",
        tags: ["TypeScript", "Tanstack Start"],
        featured: true,

        detail: {
            github: "https://github.com/dwhalley15/living-world-quest-board",
            live: "https://living-world-quest-board.vercel.app/",
            media: [
                {
                    src: projectImage("living-world-quest-board/home.png"),
                    alt: "A screenshot of the living world quest board web app home screen"
                },
                {
                    src: projectImage("living-world-quest-board/character.png"),
                    alt: "A screenshot of the living world quest board web app character modal"
                },
                {
                    src: projectImage("living-world-quest-board/quest.png"),
                    alt: "A screenshot of the living world quest board web app quest modal"
                },
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "Adventurers and role-playing communities need a modern, interactive quest management platform that makes it easy to discover, organize, and participate in quests. Traditional quest boards often rely on static listings or fragmented communication channels, making it difficult to track quest availability, participant progress, character involvement, and completed adventures. As the number of quests and adventurers grows, these systems can become difficult to manage, limiting engagement and creating a less organized adventure experience."
                },
                {
                    heading: "Approach",
                    text: "Developed a full-stack interactive quest board application using TanStack Start. Implemented a secure user authentication system using PostgreSQL for account and character data management. Built session-based authentication using unique session tokens stored in a dedicated PostgreSQL sessions table linked to character accounts. Designed relational database structures to manage characters, user accounts, sessions, quests, and associated quest data. Implemented protected application routes and authentication checks to ensure only authenticated users can access account-specific functionality. Developed dynamic quest management functionality allowing users to discover, participate in, and track available quests. Created reusable components and modular application architecture to separate server-side logic, database operations, authentication, and user interface functionality. Built responsive and interactive interfaces to provide a clear and engaging experience for managing characters and quests. Applied modern full-stack development practices and type-safe patterns provided by TanStack Start to create a maintainable and scalable application."
                },
                {
                    heading: "Outcome",
                    text: "Delivered a fully functional, interactive quest board application built with TanStack Start, providing users with a centralized platform for discovering and managing adventures. Implemented a complete authentication workflow using PostgreSQL and session-based authentication, allowing users to securely create accounts, log in, and maintain authenticated sessions. Developed a relational database structure connecting character accounts with session records, providing a reliable foundation for user identity and session management. Created a dynamic quest experience where users can browse available quests, interact with quest content, and manage their participation through an intuitive interface. Built a responsive and modern user interface that provides clear navigation and feedback across different sections of the application. Applied full-stack development principles by integrating frontend interfaces with server-side logic, database operations, authentication, and persistent application data. Gained practical experience with TanStack Start, PostgreSQL database design, session-token authentication, relational data modelling, protected routes, and building scalable full-stack web applications."
                }
            ]
        },

        seo: {
            title: "Living World Quest Board | David Whalley — Ortheyus",
            description: "An interactive quest management platform for adventurers and role-playing communities, built with TanStack Start and PostgreSQL.",
            image: "/projects/living-world-quest-board/og.png"
        }
    },
    {
        slug: "apple-catcher",
        name: "Apple Catcher",
        year: "2025",
        category: "personal",
        description:
            "Catch falling apples in this fast-paced arcade game! Collect points and challenge your high score in a fun browser game with colourful pixel art.",
        tags: ["JavaScript", "Phaser"],
        featured: true,
    },
    {
        slug: "medical-portfolios",
        name: "Medical Portfolios",
        year: "2025",
        category: "academic",
        description:
            "Create your professional medical portfolio. Showcase expertise, track CPD, and connect with patients. For students, trainees, and specialists.",
        tags: ["TypeScript", "NextJs"],
        featured: true,
    },
    {
        slug: "insta-translate",
        name: "Insta Translate",
        year: "2024",
        category: "academic",
        description:
            "React Native translation app using Expo, Google Translate, and OpenAI APIs for fast multilingual communication.",
        tags: ["React Native", "Expo", "JavaScript"],
        featured: false,
    },
    {
        slug: "battleships",
        name: "Battleships",
        year: "2023",
        category: "academic",
        description:
            "A simple battleships game written in Kotlin for Android. Logic and UI are separated so a different UI can be used.",
        tags: ["Kotlin", "Android Studio"],
        featured: false,
    },
    {
        slug: "daily-grind",
        name: "Daily Grind",
        year: "2023",
        category: "academic",
        description:
            "Organise and manage daily tasks with ease. Create, update, and track tasks to stay focused and productive.",
        tags: [  "PHP",
                "JavaScript",
                "HTML",
                "CSS",
                "Kotlin",
                "Android Studio"],
        featured: false,
    },
    {
        slug: "right-track",
        name: "Right Track",
        year: "2022",
        category: "academic",
        description:
            "Prototype web app for managing employee orientation processes and delivering orientation materials efficiently.",
        tags: [  "PHP",
                "MySQL",
                "JavaScript",
                "HTML",
                "CSS"],
        featured: false,
    },
    {
        slug: "the-guitar-shop",
        name: "The Guitar Shop",
        year: "2022",
        category: "academic",
        description:
            "Full-stack e-commerce platform for guitar enthusiasts with product catalogue, secure auth, shopping cart, and admin.",
        tags: [  "PHP",
                "MySQL",
                "JavaScript",
                "HTML",
                "CSS"],
        featured: false,
    },
    {
        slug: "inspirational-quotes",
        name: "Inspirational Quotes",
        year: "2022",
        category: "academic",
        description:
            "Inspirational Quote Web App delivers daily motivational quotes. Built with HTML, CSS, and JavaScript, it offers a clean interface for refreshing and receiving new quotes.",
        tags: ["Python",
            "FLASK",
            "JSON",
            "AJAX",
            "JavaScript",
            "HTML",
            "CSS"],
        featured: false,
    }
];

