"use client";
import { motion } from "motion/react";
import { useGlobal } from "../../context-providers/global-provider";
import Cited from "./citation";
import Container from "./container";
import type { PondStats } from "./koi-pond/koi-pond";
import { SOURCES } from "../data/sources";

const SOCIALS = [
    { label: "github", href: "https://github.com/A2105s" },
    { label: "linkedin", href: "https://www.linkedin.com/in/devadarshsingh" },
    { label: "site", href: "https://devadarshsingh.vercel.app" },
];

const UNDERLINE =
    "underline decoration-[color-mix(in_srgb,var(--foreground-color)_35%,transparent)] decoration-1 underline-offset-[5px] outline-none transition-opacity duration-150 hover:decoration-foreground focus-visible:decoration-foreground";

const QuoteLines = () => (
    <>
        drop a thought in,
        <br />
        watch the pond answer
        <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-foreground motion-reduce:animate-none"
        />
    </>
);

const Socials = ({ className }: { className?: string }) => (
    <p className={className}>
        {SOCIALS.map(({ label, href }, i) => (
            <span key={label}>
                {i > 0 && <span className="opacity-40"> / </span>}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${UNDERLINE} opacity-60 hover:opacity-100 focus-visible:opacity-100`}
                >
                    {label}
                </a>
            </span>
        ))}
    </p>
);

const FrontPage = ({ isLight, stats }: { isLight: boolean; stats: PondStats }) => {
    const { isMobile } = useGlobal();

    if (isMobile === null) return null;
    return isMobile ? mobilePage() : desktopPage({ isLight, stats });
};

const desktopPage = ({ isLight, stats }: { isLight: boolean; stats: PondStats }) => {
    return (
        <Container
            as="header"
            className="relative flex h-full flex-col justify-end gap-10 bg-transparent pb-32 pt-32 text-foreground [@media(max-height:720px)]:gap-6 [@media(max-height:720px)]:pb-12 [@media(max-height:720px)]:pt-20"
        >
            {stats.koi > 0 && (
                <div
                    data-koi-avoid
                    aria-hidden="true"
                    className="absolute right-6 top-8 font-geistMono text-[11px] leading-relaxed tabular-nums lg:right-[20vw]"
                >
                    <div className="opacity-[0.32]">{stats.koi}</div>
                    {/* The pellet count flashes each time it changes, tying a click or a bite to the number. */}
                    <motion.div
                        key={stats.pellets}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.32 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {stats.pellets}
                    </motion.div>
                </div>
            )}
            <motion.blockquote
                data-koi-avoid
                className="font-geistMono text-[14px] lowercase leading-relaxed tracking-[0.02em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <QuoteLines />
            </motion.blockquote>
            <motion.div
                data-koi-avoid
                className="cited-prose max-w-[54rem] font-geistMono text-[15px] leading-[max(22px,3vh)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h1>Hello, I&apos;m Adarsh Singh.</h1>
                <p>
                    B.Tech CSE student @{" "}
                    <Cited source="amityUniv" isLight={isLight}>
                        Amity University Gwalior
                    </Cited>
                    , building at the intersection of full-stack development, AI, and cybersecurity.
                </p>
                <p>
                    Google Student Ambassador @{" "}
                    <Cited source="google" isLight={isLight}>
                        Gemini AI
                    </Cited>
                    , Technical Coordinator @{" "}
                    <Cited source="amityClub" isLight={isLight}>
                        Amity Coding Club
                    </Cited>
                    .
                </p>
                <p>
                    Currently, building @{" "}
                    <Cited source="pramaan" isLight={isLight}>
                        Pramaan IPDR
                    </Cited>{" "}
                    and{" "}
                    <Cited source="paperflow" isLight={isLight}>
                        PaperFlow
                    </Cited>
                    .
                </p>
                <Socials className="mt-[1.5vh]" />
            </motion.div>
        </Container>
    );
};

// Hover cards need a pointer, so on touch the mentions link straight to each site.
const MobileLink = ({ source, children }: { source: string; children: React.ReactNode }) => (
    <a href={SOURCES[source].href} target="_blank" rel="noopener noreferrer" className={UNDERLINE}>
        {children}
    </a>
);

const mobilePage = () => {
    return (
        // Top padding clears the floating nav pill.
        <Container
            as="header"
            className="flex h-full flex-col justify-end gap-8 bg-transparent pb-12 pt-28 font-geistMono text-foreground [@media(max-height:640px)]:gap-5 [@media(max-height:640px)]:pb-8"
        >
            <motion.blockquote
                data-koi-avoid
                className="text-[13px] lowercase leading-relaxed tracking-[0.02em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <QuoteLines />
            </motion.blockquote>
            <motion.div
                data-koi-avoid
                className="flex flex-col gap-3 text-[14px] leading-[1.6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <h1>Hello, I&apos;m Adarsh Singh.</h1>
                <p>
                    B.Tech CSE student @ <MobileLink source="amityUniv">Amity University Gwalior</MobileLink>, building
                    at the intersection of full-stack development, AI, and cybersecurity.
                </p>
                <p>
                    Google Student Ambassador @ <MobileLink source="google">Gemini AI</MobileLink>, Technical
                    Coordinator @ <MobileLink source="amityClub">Amity Coding Club</MobileLink>.
                </p>
                <p>
                    Currently, building @ <MobileLink source="pramaan">Pramaan IPDR</MobileLink> and{" "}
                    <MobileLink source="paperflow">PaperFlow</MobileLink>.
                </p>
                <Socials className="mt-2" />
            </motion.div>
        </Container>
    );
};

export default FrontPage;
