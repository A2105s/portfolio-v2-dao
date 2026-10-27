/** Sources for the landing page's @-mentions: what the hover card shows, plus where a click lands. */

export type Source = {
    key: string;
    /** Shown beside the mark in the card header. */
    name: string;
    /**
     * Optical size correction, default 1. A circular plate covers ~79% of the
     * area a square one does, so it reads small at the same dimensions.
     */
    iconScale?: number;
    /** Vendored favicon in /public/logos. Omit and the card falls back to a monogram. */
    icon?: string;
    /** Prominent line in the card — the title slot. */
    role: string;
    /** Leads the body line, the way a publication date does in a real citation. */
    dates: string;
    /** One line on the work itself. */
    summary: string;
    /** Where a click lands: an in-app path or an external URL. */
    href?: string;
    /** Keys of other sources this one rolls up; the card lists each of them instead of one role. */
    group?: string[];
};

export const SOURCES: Record<string, Source> = {
    amityUniv: {
        key: "amityUniv",
        name: "Amity University Gwalior",
        role: "B.Tech, Computer Science Engineering",
        dates: "2024–2028",
        summary: "Full-stack development, AI, and cybersecurity.",
        href: "https://www.amity.edu/gwalior/",
    },
    amityClub: {
        key: "amityClub",
        name: "Amity Coding Club",
        role: "Technical Coordinator",
        dates: "Jul 2024–Present",
        summary: "Directing strategy and the technical roadmap for a 50+ member community; promoted from Technical Assistant in 7 months.",
    },
    google: {
        key: "google",
        name: "Google (via Ping Network)",
        icon: "/logos/google.png",
        iconScale: 1.16,
        role: "Student Ambassador – Gemini AI",
        dates: "Aug–Dec 2025",
        summary: "Ran AI workshops and live demos for 100+ students; built a campus AI interest group from zero.",
        href: "https://gemini.google.com/",
    },
    pramaan: {
        key: "pramaan",
        name: "Pramaan IPDR",
        role: "Builder",
        dates: "2025–2026",
        summary: "IPDR intelligence platform for law-enforcement cyber investigation. Winning team, Gwalior Police Cyber Security Hackathon 2026.",
        href: "https://pramaanipdr.vercel.app/",
    },
    paperflow: {
        key: "paperflow",
        name: "PaperFlow",
        role: "Sole developer",
        dates: "2025",
        summary: "Markdown → print-ready documents across 25 themes, with one-click client-side PDF export.",
        href: "https://paperflowing.vercel.app/",
    },
};
