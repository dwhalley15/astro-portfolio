
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

export interface ProjectVideo {
    youtubeId: string;
    title: string;
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
        video?: ProjectVideo;
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
        slug: "astro-portfolio",
        name: "Astro Portfolio",
        year: "2026",
        category: "personal",
        description:
            "A retro arcade-inspired developer portfolio built with Astro, TypeScript, and Tailwind CSS v4, featuring statically generated projects, technical notes, and a distinctive pixel-art design.",
        tags: ["Astro", "TypeScript", "Tailwind CSS"],
        featured: true,

        detail: {
            github: "https://github.com/dwhalley15/astro-portfolio",
            live: "https://portfolio.ortheyus.uk/",
            media: [
                {
                    src: projectImage("astro-portfolio/home.png"),
                    alt: "The Astro portfolio homepage featuring a retro arcade-inspired design."
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: `My previous portfolio was built using Next.js, React, TypeScript, and PostgreSQL. While it provided a flexible foundation for showcasing projects and professional experience, the architecture introduced more complexity than a personal portfolio necessarily required.

                        Most of the website's content consisted of relatively static information, including project descriptions, technical skills, and professional details. Maintaining a database-backed application for content that changed infrequently added unnecessary moving parts.

                        I wanted to rebuild the portfolio with a simpler architecture while improving its visual identity, performance, maintainability, and search engine optimisation.

                        The challenge was to preserve the functionality of a modern developer portfolio without relying on a client-side application or database for content delivery.`
                },
                {
                    heading: "Approach",
                    text: `Rebuilt the portfolio using Astro, TypeScript, and Tailwind CSS v4, focusing on static site generation, reusable components, and a distinctive retro arcade-inspired design.

                        Replaced the previous database-driven content approach with centralised TypeScript data files for projects, technical notes, and the technology stack. Astro's dynamic routes generate individual project and article pages at build time, allowing new content to be added without manually creating additional page templates.

                        Developed a responsive visual identity using pixel-inspired typography, warm colours, decorative stripes, bold borders, and arcade-style interactions. Created reusable components and a shared layout to maintain consistency throughout the website.

                        Implemented responsive image optimisation using Astro's built-in image tools, including WebP conversion and responsive image sizes. Added project screenshots, embedded YouTube demonstrations, and custom Open Graph artwork.

                        Built a contact form using Formspree, allowing submissions without introducing a custom backend.

                        Added page-specific SEO metadata, canonical URLs, JSON-LD structured data, an automatically generated XML sitemap, and a custom 404 page.

                        Configured Astro's built-in Content Security Policy support and additional security headers for deployment to Cloudflare Pages.`
                },
                {
                    heading: "Outcome",
                    text: `Created a fully static developer portfolio that showcases software projects, technical experience, and development notes through a consistent, responsive interface.

                        Simplified content management by moving project and article information into typed data files, reducing the need for a database or content management system.

                        Established a distinctive retro arcade visual identity that carries through the navigation, project pages, technical notes, and supporting artwork.

                        Implemented responsive image handling, page-specific social sharing metadata, structured data, and automated sitemap generation to support performance and discoverability.

                        Reduced runtime complexity by generating pages during the build process and using external services only where needed, such as contact form submissions and embedded videos.

                        The project also provided an opportunity to revisit architectural decisions from my previous portfolio and explore how a static-first approach can simplify the ongoing maintenance of a content-focused website.`
                }
            ]
        },

        seo: {
            title: "Astro Portfolio | David Whalley — Ortheyus",
            description:
                "A retro arcade-inspired developer portfolio built with Astro, TypeScript, and Tailwind CSS v4, featuring static generation, technical notes, and custom pixel-art design.",
            image: "/projects/astro-portfolio/og.png"
        }
    },
    {
        slug: "living-world-quest-board",
        name: "Living World Quest Board",
        year: "2026",
        category: "personal",
        description: "D&D quest management for DMs and players. Create characters, form adventuring groups, claim quests, and track adventures from unclaimed to completed.",
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

        detail: {
            github: "https://github.com/dwhalley15/AppleGame",
            live: "https://ortheyus-apple-catcher-game.vercel.app/",
            media: [
                {
                    src: projectImage("apple-catcher/home.jpg"),
                    alt: "A screenshot of the Apple Catcher home screen on a mobile browser."
                },
                {
                    src: projectImage("apple-catcher/in-game.png"),
                    alt: "A screenshot of the Apple Catcher game being played on a desktop browser"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: `Apple Catcher addresses the challenge of creating an engaging arcade experience using simple mechanics and minimal controls. The game requires players to catch falling apples while managing an increasing game speed that gradually raises the difficulty. As the pace accelerates, players must rely on quick reactions, spatial awareness, and precise movement to keep up with the growing challenge.

                            The primary gameplay problem is balancing the collection of valuable apples with the avoidance of rotten ones. Catching a rotten apple results in the loss of a life, making careful positioning just as important as fast reactions. To help players survive longer, the game rewards consistent performance by granting an additional life for every 100 apples caught, up to a maximum of three lives.
                            
                            By combining progressively increasing difficulty, risk-and-reward decision-making, and a life-based survival system, the game encourages players to improve their reflexes and achieve higher scores through repeated play and skill development.`
                },
                {
                    heading: "Approach",
                    text: "The approach taken for Apple Catcher was to create a simple but engaging arcade experience using Phaser.js, focusing on responsive controls, increasing difficulty, and a clear risk-and-reward gameplay loop. The game was designed around a minimal control system where players move a basket horizontally to catch falling apples while avoiding rotten apples. The gameplay gradually becomes more challenging by increasing the speed and frequency of falling objects, requiring players to improve their reaction time and accuracy as they progress. A life-based scoring system was implemented to add an additional layer of strategy. Players lose a life when catching rotten apples, while successfully catching 100 apples rewards an additional life, up to a maximum of three lives. This encourages players to balance aggressive collection with careful decision-making rather than simply catching every falling object. The game was developed using Phaser.js to manage the game loop, object interactions, player movement, collision detection, and dynamic difficulty scaling. Pixel-art visuals and simple mechanics were used to create an accessible arcade experience while maintaining replayability through score improvement and skill progression."
                },
                {
                    heading: "Outcome",
                    text: "Developed a fully functional arcade-style browser game using Phaser.js, featuring responsive player controls, falling objects, collision detection, and dynamic difficulty progression. Created an engaging gameplay loop where players must balance speed and accuracy by catching normal apples while avoiding rotten apples that reduce their remaining lives. Implemented a life-based survival system that increases player engagement by rewarding consistent performance with an additional life for every 100 apples caught, up to a maximum of three lives. Designed a progressive difficulty system that increases the challenge over time by accelerating gameplay, requiring players to improve their reaction time, timing, and decision-making skills. Produced a simple and accessible user experience through minimal controls, pixel-art visuals, and straightforward mechanics while maintaining replayability through score improvement. Gained practical experience developing interactive game features in Phaser.js, including game states, object movement, user input handling, and gameplay balancing."
                }
            ]
        },

        seo: {
            title: "Apple Catcher | David Whalley — Ortheyus",
            description: "An engaging arcade-style browser game where players catch falling apples while avoiding rotten ones, built with Phaser.js.",
            image: "/projects/apple-catcher/og.png"
        }
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

        detail: {
            github: "https://github.com/dwhalley15/medical-portfolios",
            live: "https://medical-portfolios.vercel.app/",
            video: {
                youtubeId: "ZlUO0is_Yoc",
                title: "A YouTube video showcasing the medical portfolios app",
            },
            media: [
                {
                    src: projectImage("medical-portfolios/home.png"),
                    alt: "A screenshot of Medical Portfolios home screen."
                },
                {
                    src: projectImage("medical-portfolios/mobile.png"),
                    alt: "A screenshot of a Medical Portfolio on mobile"
                },
                {
                    src: projectImage("medical-portfolios/portfolio.png"),
                    alt: "A screenshot of a Medical Portfolio on desktop"
                },
                {
                    src: projectImage("medical-portfolios/search.png"),
                    alt: "A screenshot of a Medical Portfolio search page"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: `Medical professionals often lack a centralized and professional way to showcase their qualifications, clinical experience, specialties, research, and achievements online. Existing platforms can be fragmented, making it difficult to manage a professional identity, connect with patients seeking specialized care, and build meaningful relationships within the medical community. Patients also face challenges in discovering the right healthcare professionals based on their specific needs and location.`
                },
                {
                    heading: "Approach",
                    text: "Developed a dedicated portfolio platform tailored specifically for healthcare professionals. Enabled users to create customizable profiles showcasing qualifications, specialties, services, and clinical experience. Built a secure and intuitive dashboard for managing credentials, achievements, publications, and career milestones. Implemented profile management tools to keep professional information accurate and up to date. Added patient discovery features that help patients find specialists based on symptoms and location. Created networking capabilities to foster collaboration and professional connections within the medical community. Offered flexible free and premium plans to support professionals throughout different stages of their careers."
                },
                {
                    heading: "Outcome",
                    text: `Established a centralized digital presence for medical professionals. Improved visibility and discoverability for healthcare providers seeking to reach new patients. Simplified the management of professional credentials, achievements, and career records. Enhanced credibility through comprehensive and professional online portfolios. Facilitated stronger networking and collaboration opportunities among medical professionals. Increased patient access to relevant specialists through targeted search functionality. Provided a scalable platform that grows alongside users' professional development and career progression.`
                }
            ]
        },

        seo: {
            title: "Medical Portfolios | David Whalley — Ortheyus",
            description: "A dedicated portfolio platform for medical professionals to showcase their qualifications, specialties, and clinical experience while connecting with patients and peers.",
            image: "/projects/medical-portfolios/og.png"
        }
    },
    {
        slug: "insta-translate",
        name: "Insta Translate",
        year: "2024",
        category: "academic",
        description:
            "React Native translation app using Expo, Google Translate, and OpenAI APIs for fast multilingual communication.",
        tags: ["React Native", "Expo", "JavaScript"],
        featured: true,

        detail: {
            github: "https://github.com/dwhalley15/insta-translate",
            video: {
                youtubeId: "fijxlUXYxRw",
                title: "A YouTube video showcasing the insta translate app",
            },
            media: [
                {
                    src: projectImage("insta-translate/home.png"),
                    alt: "A screenshot of the insta translate mobile app"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: `Language barriers can make communication difficult for travelers, students, professionals, and multilingual teams. Many translation tools lack a seamless user experience, reliable voice capabilities, or intelligent context-aware translations, leading to misunderstandings and inefficient communication across different languages.`
                },
                {
                    heading: "Approach",
                    text: "Developed a cross-platform mobile translation application using React Native and Expo. Integrated Google Translate APIs to provide fast and accurate translations across multiple languages. Leveraged OpenAI APIs to enhance translation quality and deliver more context-aware language processing. Implemented voice input functionality to allow users to speak text directly into the application. Added text-to-speech capabilities for pronunciation assistance and improved accessibility. Designed a responsive and intuitive user interface focused on speed, simplicity, and ease of use. Utilized Expo to streamline development, testing, and deployment across mobile platforms."
                },
                {
                    heading: "Outcome",
                    text: `Enabled seamless communication between users speaking different languages. Reduced language barriers for travelers, students, and professionals in everyday interactions. Improved translation accuracy through AI-enhanced language processing. Enhanced accessibility with integrated voice input and text-to-speech functionality. Delivered a fast, responsive, and user-friendly mobile experience. Provided a scalable foundation for future language and AI-powered translation features. Simplified multilingual communication through a single, easy-to-use mobile application.`
                }
            ]
        },

        seo: {
            title: "Insta Translate | David Whalley — Ortheyus",
            description: "React Native translation app using Expo, Google Translate, and OpenAI APIs for fast multilingual communication.",
            image: "/projects/insta-translate/og.png"
        }
    },
    {
        slug: "next-portfolio",
        name: "Next Portfolio",
        year: "2024",
        category: "personal",
        description: "A personal portfolio website built with Next.js to showcase projects and skills.",
        tags: ["Next.js", "React", "TypeScript"],
        featured: true,

        detail: {
            github: "https://github.com/dwhalley15/next-portfolio",
            live: "https://ortheyus-portfolio.vercel.app/",
            media: [
                {
                    src: projectImage("next-portfolio/home.png"),
                    alt: "A screenshot of the next portfolio website on a desktop"
                },
                {
                    src: projectImage("next-portfolio/mobile.png"),
                    alt: "A screenshot of the next portfolio website on a mobile device"
                },
                {
                    src: projectImage("next-portfolio/work.png"),
                    alt: "A screenshot of the next portfolio website on the work/projects section"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: `Developers and professionals need a modern, high-performance portfolio website that effectively showcases their skills, projects, achievements, and experience. Traditional portfolios often lack scalability, dynamic content management, responsive design, and efficient data handling, making it difficult to maintain a professional online presence that grows alongside a career.`
                },
                {
                    heading: "Approach",
                    text: "Built a modern portfolio application using Next.js and TypeScript. Designed a clean and visually engaging interface to highlight projects, skills, and professional achievements. Implemented responsive layouts to ensure a seamless experience across desktop, tablet, and mobile devices. Leveraged Next.js server-side rendering capabilities to improve performance, SEO, and content delivery. Integrated dynamic content generation to simplify updates and content management. Connected the application to a PostgreSQL database for efficient data storage and retrieval. Structured the platform to showcase academic achievements, technical expertise, and software development projects in a cohesive format."
                },
                {
                    heading: "Outcome",
                    text: `Delivered a fast, scalable, and professional portfolio website. Improved user experience through responsive design and optimized performance. Enhanced discoverability and search engine visibility with server-side rendering. Simplified content management through dynamic data-driven architecture. Created a centralized platform for presenting projects, skills, and career accomplishments. Demonstrated full-stack development capabilities through modern web technologies and database integration. Established a strong personal brand and professional online presence for potential employers, clients, and collaborators.`
                }
            ]
        },

        seo: {
            title: "Next Portfolio | David Whalley — Ortheyus",
            description: "A modern portfolio website built with Next.js and TypeScript, showcasing projects, skills, and professional achievements.",
            image: "/projects/next-portfolio/og.png"
        }

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

        detail: {
            github: "https://github.com/dwhalley15/battleships",
            video: {
                youtubeId: "PboZl5gaMAg",
                title: "YouTube video showcasing the battleships app",
            },
            media: [
                {
                    src: projectImage("battleships/home.png"),
                    alt: "A screenshot of the battleships mobile app"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "The classic Battleships game requires managing game state, enforcing complex gameplay rules, and providing an intuitive user experience. Building a digital version presents additional challenges such as ship placement validation, turn-based gameplay, hit detection, win condition management, and maintaining clean, modular application architecture throughout the game."
                },
                {
                    heading: "Approach",
                    text: "Developed a fully interactive digital implementation of the classic Battleships game. Built game logic to manage ship placement, turn-based gameplay, hit detection, and victory conditions. Implemented validation to prevent invalid ship placement, overlapping ships, and out-of-bounds positioning. Designed reusable components and modular architecture to separate game logic from the user interface. Created dynamic game state management to provide real-time updates throughout gameplay. Developed a responsive interface that provides clear visual feedback for player actions, hits, misses, and sunk ships. Applied object-oriented programming principles and clean coding practices to create a maintainable and extensible codebase."
                },
                {
                    heading: "Outcome",
                    text: "Delivered a fully functional Battleships game that accurately recreates the classic gameplay experience. Demonstrated strong problem-solving through the implementation of complex game rules and state management. Improved user experience with responsive interactions and clear gameplay feedback. Produced a modular, maintainable codebase that can be extended with additional features such as multiplayer, AI opponents, or enhanced game modes. Showcased proficiency in front-end development, application architecture, and interactive software engineering principles. Reinforced best practices in testing, validation, and state-driven application development through a complete end-to-end project."
                }
            ]
        },

        seo: {
            title: "Battleships | David Whalley — Ortheyus",
            description: "A fully interactive digital implementation of the classic Battleships game, featuring ship placement validation, turn-based gameplay, and dynamic game state management.",
            image: "/projects/battleships/og.png"
        }
    },
    {
        slug: "daily-grind",
        name: "Daily Grind",
        year: "2023",
        category: "academic",
        description:
            "Organise and manage daily tasks with ease. Create, update, and track tasks to stay focused and productive.",
        tags: ["PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Kotlin",
            "Android Studio"],
        featured: false,

        detail: {
            github: "https://github.com/dwhalley15/daliygrindwebapplication",
            live: "https://ortheyus.uk/daliygrindwebapplication/",
            video: {
                youtubeId: "02rjekstblo",
                title: "A YouTube video showcasing the daily grind app",
            },
            media: [
                {
                    src: projectImage("daily-grind/home.png"),
                    alt: "A screenshot of the daily grind profile screen"
                },
                {
                    src: projectImage("daily-grind/account.png"),
                    alt: "A screenshot of the daily grind account screen"
                },
                {
                    src: projectImage("daily-grind/activity.png"),
                    alt: "A screenshot of the daily grind activity screen"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "Managing daily tasks and maintaining productivity can be challenging without a centralized system for organizing work, tracking time, and staying on schedule. Many users need a simple, accessible application that combines task management, time tracking, and reminders to help improve focus and daily efficiency."
                },
                {
                    heading: "Approach",
                    text: "Developed a web-based productivity application to simplify daily task management. Implemented full CRUD functionality, allowing users to create, update, and delete tasks. Integrated time tracking to monitor the duration of individual tasks and analyze productivity. Built a notification system to remind users of upcoming tasks and deadlines. Added secure user authentication for account registration, login, and personalized task management. Designed a responsive interface that delivers a consistent experience across desktop and mobile devices. Developed the application using HTML, CSS, JavaScript, PHP, and MySQL to provide a complete full-stack solution."
                },
                {
                    heading: "Outcome",
                    text: "Delivered a centralized platform for organizing daily tasks and improving personal productivity. Simplified task management through an intuitive and user-friendly interface. Enabled users to monitor how they spend their time with integrated task tracking. Improved productivity by providing reminders for upcoming tasks and deadlines. Ensured secure access to personalized data through user authentication. Created a responsive application that works seamlessly across multiple devices. Demonstrated full-stack web development skills through front-end development, back-end functionality, database integration, and user management."
                }
            ]
        },

        seo: {
            title: "Daily Grind | David Whalley — Ortheyus",
            description: "A web application for managing daily grind tasks, featuring task tracking, user authentication, and dynamic content management.",
            image: "/projects/daily-grind/og.png"
        }
    },
    {
        slug: "right-track",
        name: "Right Track",
        year: "2022",
        category: "academic",
        description:
            "Prototype web app for managing employee orientation processes and delivering orientation materials efficiently.",
        tags: ["PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"],
        featured: false,

        detail: {
            github: "https://github.com/dwhalley15/right-track",
            live: "https://ortheyus.uk/right-track/",
            media: [
                {
                    src: projectImage("right-track/home.png"),
                    alt: "A screenshot of the right-track dashboard"
                },
                {
                    src: projectImage("right-track/courses.png"),
                    alt: "A screenshot of the right-track courses"
                },
                {
                    src: projectImage("right-track/new-task.png"),
                    alt: "A screenshot of the right-track new tasks"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "Organizations often face challenges when onboarding new employees, with orientation processes frequently managed through spreadsheets, emails, and disconnected systems. This can lead to difficulties tracking attendance, monitoring completion progress, distributing training materials, and ensuring a consistent onboarding experience across the organization."
                },
                {
                    heading: "Approach",
                    text: "Developed a web-based employee orientation platform to streamline onboarding workflows. Implemented secure user authentication for employees and administrators. Built session management functionality to schedule, organize, and manage orientation events. Created completion tracking tools to monitor employee progress through orientation requirements. Developed a centralized resource repository for storing and distributing training materials, documents, and presentations. Designed an administrative dashboard for managing users, orientation sessions, and learning resources. Built a responsive interface using PHP, MySQL, JavaScript, HTML, and CSS to ensure accessibility across desktop and mobile devices."
                },
                {
                    heading: "Outcome",
                    text: "Centralized employee onboarding activities within a single platform. Improved visibility into employee orientation progress and completion status. Simplified the management of orientation sessions, resources, and participant records. Enhanced the onboarding experience through easy access to training materials and information. Reduced administrative overhead by providing dedicated tools for managing onboarding workflows. Delivered a responsive solution that supports users across multiple devices. Demonstrated full-stack web development capabilities through authentication, database management, administrative tooling, and workflow automation."
                }
            ]
        },

        seo: {
            title: "Right Track | David Whalley — Ortheyus",
            description: "A web application for managing employee orientation and onboarding processes, featuring session management, completion tracking, and resource distribution.",
            image: "/projects/right-track/og.png"
        }
    },
    {
        slug: "the-guitar-shop",
        name: "The Guitar Shop",
        year: "2022",
        category: "academic",
        description:
            "Full-stack e-commerce platform for guitar enthusiasts with product catalogue, secure auth, shopping cart, and admin.",
        tags: ["PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"],
        featured: false,

        detail: {
            github: "https://github.com/dwhalley15/theguitarshop",
            live: "https://ortheyus.uk/theguitarshop/",
            video: {
                youtubeId: "NSwllTryS4g",
                title: "A YouTube video showcasing the guitar shop website",
            },
            media: [
                {
                    src: projectImage("the-guitar-shop/home.png"),
                    alt: "A screenshot of the guitar shop homepage"
                },
                {
                    src: projectImage("the-guitar-shop/mobile.png"),
                    alt: "A screenshot of the guitar shop home page on mobile"
                },
                {
                    src: projectImage("the-guitar-shop/electric.png"),
                    alt: "A screenshot of the guitar shop listing page"
                },
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "Online guitar retailers need an intuitive and secure platform that allows customers to browse products, make purchases, and manage orders with ease. At the same time, administrators require efficient tools to maintain product listings, process customer orders, and manage user accounts, all within a centralized e-commerce system."
                },
                {
                    heading: "Approach",
                    text: "Developed a full-stack e-commerce platform tailored for guitar enthusiasts and music retailers. Built a comprehensive product catalog to showcase guitars and related accessories. Implemented secure user authentication for customer registration, login, and account management. Created shopping cart functionality to enable users to add products and complete purchases. Developed an order management system allowing customers to view and track their orders. Built an administrative dashboard for managing products, customer accounts, and order processing. Utilized PHP, MySQL, HTML, CSS, and JavaScript to deliver a responsive and scalable web application."
                },
                {
                    heading: "Outcome",
                    text: "Delivered a fully functional online store for browsing and purchasing guitars and accessories. Streamlined the shopping experience through secure authentication and intuitive navigation. Simplified order management for both customers and administrators. Enabled efficient administration of products, users, and customer orders through a centralized dashboard. Created a responsive platform that provides a consistent experience across desktop and mobile devices. Demonstrated full-stack web development skills through the implementation of e-commerce functionality, database integration, authentication, and administrative tooling."
                }
            ]
        },

        seo: {
            title: "The Guitar Shop | David Whalley — Ortheyus",
            description: "A full-stack e-commerce platform for guitar enthusiasts and music retailers, featuring product catalog, shopping cart, order management, and administrative dashboard.",
            image: "/projects/the-guitar-shop/og.png"
        }
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

        detail: {
            github: "https://github.com/dwhalley15/Inspirational-Quote-Web-App",
            video: {
                youtubeId: "JuchXjAt25s",
                title: "A YouTube video showcasing the inspirational quotes home web app",
            },
            media: [
                {
                    src: projectImage("inspirational-quotes/home.png"),
                    alt: "A screenshot of the inspirational quotes home web app"
                }
            ],
            sections: [
                {
                    heading: "Problem",
                    text: "Many inspirational quote applications provide a static, read-only experience with limited interaction or customization. Users need a simple platform where they can not only browse motivational content but also contribute, edit, and manage quotes while enjoying a lightweight and responsive interface."
                },
                {
                    heading: "Approach",
                    text: "Developed a full-stack web application using Python Flask and vanilla JavaScript. Built a dynamic interface for browsing and managing inspirational quotes. Implemented full CRUD functionality, allowing users to create, update, and delete quotes. Developed a random quote generator to provide users with fresh inspiration on demand. Integrated a Flask REST API to handle client-server communication through AJAX requests. Utilized a JSON file for lightweight data persistence without requiring a database. Designed a clean and responsive interface with real-time updates and a dynamic date display."
                },
                {
                    heading: "Outcome",
                    text: "Delivered an interactive quote management application with full CRUD capabilities. Enabled users to browse, contribute, edit, and remove inspirational quotes. Improved user engagement through a random quote generation feature. Simplified deployment by utilizing JSON-based data storage instead of a traditional database. Demonstrated full-stack development skills through RESTful API design, asynchronous JavaScript, and Flask backend integration. Created a lightweight, responsive application that is easy to maintain, extend, and deploy."
                }
            ]
        },

        seo: {
            title: "Inspirational Quotes | David Whalley — Ortheyus",
            description: "A web app delivering daily motivational quotes, allowing users to browse, contribute, and manage quotes with a clean and interactive interface.",
            image: "/projects/inspirational-quotes/og.png"
        }
    }
];

