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
    typescript
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
            "Built sleek, custom portfolios for clients using React.js to make their work shine online. ✨",
            "Designed responsive layouts that looked 🔥 on any screen—desktop, tablet, or phone.",
            "Worked closely with clients to match their brand and vibe for a unique, standout site.",
            "Added smooth animations and ensured cross-browser compatibility for a seamless experience.",
            "Boosted SEO and accessibility so their sites didn’t just look good but ranked well too. 📈"
        ]
    },
    {
        title: "React Native Developer",
        company_name: "Uber Clone",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developed a full-on Uber-style app using React Native—real-time tracking, ride requests, payments, the whole package. 🚗💨",
            "Made sure the app ran flawlessly on both iOS and Android (because nobody likes bugs).",
            "Collaborated with designers & backend devs to create a smooth, easy-to-use ride experience.",
            "Optimized performance, squashed bugs, and locked down security to keep things running tight.",
            "Turned feedback into 🔥 updates to make the app even better over time."
        ]
    },
    {
        title: "Web Developer",
        company_name: "Image to Code",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Built a tool that converts images into clean, functional frontend code—no more manual coding. 🔥",
            "Implemented AI to analyze images and auto-generate accurate UI components.",
            "Worked with designers to make sure the AI-generated code actually made sense. 🤖",
            "Made sure everything was responsive & looked great on any screen.",
            "Optimized performance to keep things fast and smooth, with less manual tweaking needed."
        ]
    },
    {
        title: "Full Stack Developer",
        company_name: "Budget Tracker",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Built a budget tracking app to help users manage money without the headache. 💰",
            "Developed key features like expense tracking, financial insights, and automated calculations.",
            "Worked with designers to create a simple, clean UI that’s actually easy to use.",
            "Made sure everything was secure & optimized for smooth performance.",
            "Integrated authentication & data protection, because security is non-negotiable. 🔒"
        ]
    }
    ,
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/briannjara',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'Built a smart expense tracker that helps users keep their budget in check, track spending, and flex better money habits. 💰📊',
        link: 'https://finansmart.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack PDF Manager',
        description: 'Developed a full-stack app that lets users upload, manage, merge, split, and annotate PDFs like a pro. 📄✨',
        link: '#',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Quiz AI',
        description: 'Created an AI-powered quiz app that generates smart questions, adapts to user knowledge, and makes learning actually fun. 🤖🎓',
        link: 'https://quiz-ai-two.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Image to Code App',
        description: 'Built a tool that converts images into clean, functional frontend code—no more manual coding.',
        link: 'https://img-code.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gemini AI Clone',
        description: 'Developed a Gemini-inspired AI chatbot that generates text, answers questions, and does the thinking for you. 🤯🤖',
        link: '#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Food Delivery App',
        description: 'Designed a food delivery app that connects hungry users to restaurants, tracks orders in real-time, and makes sure no meal gets left behind. 🍔🚀',
        link: 'https://njarambadel.netlify.app/',
    }
    
    
];