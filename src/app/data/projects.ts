export type Project = {
    /** URL segment for the project's own page. */
    slug: string;
    index: string;
    name: string;
    description: string;
    tech: string[];
    year: string;
    /** Omit to show the project without sending anyone anywhere. */
    link?: string;
    /** Small raster preview, rendered from the original artwork. */
    thumb: string;
    /** A project with its own page on the site; its tiles link there instead of out. */
    page?: {
        tagline: string;
        /** The write-up under the tagline, so the page doesn't repeat it. */
        about: Prose;
        /** Omit for a project without a demo; the poster then stands alone as the lead image. */
        video?: string;
        poster: string;
        /** Wide banner across the top of the page, like a Notion cover. */
        cover?: string;
        /** 1200×630 card for link previews when the page is shared. */
        share?: string;
        /** How the project got here, as prose with the clips placed between paragraphs. */
        story?: StoryBlock[];
    };
};

/** Plain text with inline links. */
export type Prose = (string | { text: string; href: string })[];

/** A paragraph is plain text with inline links; a clip is a short muted video. */
export type StoryBlock =
    | { kind: "heading"; text: string }
    | { kind: "text"; parts: Prose }
    | { kind: "clip"; src: string; poster?: string; label: string }
    | { kind: "image"; src: string; alt: string; width: number; height: number }
    /** `start` is the panel open before anyone interacts; lead with the strongest shot. */
    | { kind: "gallery"; title?: string; shots: Shot[]; start?: number };

/** A captioned still of the product, shown on its own or in a gallery grid. */
export type Shot = {
    /** Tight crop of the UI, for the swipeable cards on small screens. */
    src: string;
    /** The full 16:9 frame, for the accordion panels on desktop. */
    frame: string;
    alt: string;
    title: string;
    caption: string;
    width: number;
    height: number;
};

export const projects: Project[] = [
    {
        index: "01",
        slug: "pramaan-ipdr",
        name: "Pramaan IPDR",
        description:
            "B-Party Intelligence and IPDR Correlation platform for law-enforcement cyber investigation teams. Automates ingestion, normalization, and classification of telecom IPDR logs across Jio, Airtel, Vodafone Idea, BSNL, and DoT formats.",
        tech: ["Next.js", "NestJS", "Polars", "TimescaleDB", "Redis", "D3.js", "Docker"],
        year: "Summer 2026",
        link: "https://pramaanipdr.vercel.app/",
        thumb: "/projects/pramaan-ipdr/pramaan-preview.png",
    },
    {
        index: "02",
        slug: "paperflow",
        name: "PaperFlow",
        description:
            "In-browser tool that converts Markdown into beautifully themed, print-ready documents across 25 customizable themes, with math rendering, syntax-highlighted code blocks, Mermaid diagrams, and one-click client-side PDF export.",
        tech: ["React.js", "Markdown Rendering", "Mermaid.js", "PDF Export"],
        year: "2025",
        link: "https://paperflowing.vercel.app/",
        thumb: "/projects/paperflow/paperflow-preview.png",
    },
];

const SEASONS = ["Winter", "Spring", "Summer", "Fall"];
// "Fall 2026" sorts after "Spring 2026"; a bare year counts as the start of that year.
const when = (p: Project) => {
    const [season, year] = p.year.includes(" ") ? p.year.split(" ") : ["", p.year];
    return Number(year) * 4 + Math.max(0, SEASONS.indexOf(season));
};

export const projectsByDate = [...projects].sort((a, b) => when(b) - when(a));

export const LAST_PROJECT_KEY = "projects-last-viewed";

export const projectHref = (p: Project) => (p.page ? `/projects/${p.slug}` : p.link);

export const isExternal = (href: string) => /^https?:/.test(href);
