import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    whatsapp,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Portfolio for Clients",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developed custom portfolio websites using React.js to showcase client work effectively",
            "Implemented responsive layouts ensuring optimal display across all device types",
            "Collaborated with clients to align designs with their brand identity and vision",
            "Integrated smooth animations and ensured cross-browser compatibility",
            "Optimized SEO and accessibility standards for improved site performance"
        ]
    },
    {
        title: "React Native Developer",
        company_name: "Uber Clone",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Engineered a comprehensive ride-sharing application using React Native",
            "Ensured consistent performance across iOS and Android platforms",
            "Coordinated with design and backend teams to deliver seamless user experience",
            "Implemented robust security measures and performance optimizations",
            "Incorporated user feedback to drive continuous improvement"
        ]
    },
    {
        title: "Web Developer",
        company_name: "Image to Code",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developed an innovative tool for automated frontend code generation from images",
            "Integrated AI technology to analyze and generate precise UI components",
            "Collaborated with design teams to validate AI-generated code quality",
            "Implemented responsive design principles across all generated components",
            "Optimized system performance for efficient code generation"
        ]
    },
    {
        title: "Full Stack Developer",
        company_name: "Budget Tracker",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Architected a comprehensive budget management application",
            "Developed core features including expense tracking and financial analytics",
            "Created an intuitive user interface through close collaboration with design teams",
            "Implemented robust security protocols and performance optimizations",
            "Integrated secure authentication and data protection measures"
        ]
    }
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/briannjara',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/brian-njaramba-33421735b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'Whatsapp',
        iconUrl: whatsapp,
        link: 'https://wa.me/254103924584',
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'A comprehensive financial management tool enabling users to track expenses, monitor budgets, and develop better financial habits.',
        link: 'https://finansmart.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack PDF Manager',
        description: 'A sophisticated document management system enabling users to upload, process, and manipulate PDF files with advanced features.',
        link: '#',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Quiz AI',
        description: 'An intelligent quiz platform leveraging AI to generate adaptive questions and create an engaging learning experience.',
        link: 'https://quiz-ai-two.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Image to Code App',
        description: 'An innovative tool that transforms visual designs into production-ready frontend code through advanced automation.',
        link: 'https://img-code.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gemini AI Clone',
        description: 'A sophisticated AI chatbot system inspired by Gemini, capable of generating text and providing intelligent responses.',
        link: '#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Food Delivery App',
        description: 'A comprehensive food delivery platform featuring real-time order tracking and seamless restaurant-customer connectivity.',
        link: 'https://njarambadel.netlify.app/',
    }
];