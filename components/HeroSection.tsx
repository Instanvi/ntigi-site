"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "./ui/Button";
import BackgroundGrid from "./BackgroundGrid";
import FloatingShapes from "./animations/FloatingShapes";
import { Terminal } from "@phosphor-icons/react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// Colors stay hardcoded — only the text content is translated
const terminalColors = [
  "text-foreground/80 font-bold",
  "text-blue-500 dark:text-blue-400",
  "text-green-600 dark:text-green-400",
  "text-foreground/75",
  "text-foreground/60",
  "text-foreground/60",
  "text-foreground/60",
  "text-yellow-600 dark:text-yellow-400",
  "text-blue-600 dark:text-blue-300",
];

const terminalKeys = [
  "terminal.line1",
  "terminal.line2",
  "terminal.line3",
  "terminal.line4",
  "terminal.line5",
  "terminal.line6",
  "terminal.line7",
  "terminal.line8",
  "terminal.line9",
] as const;

export default function HeroSection() {
  const t = useTranslations("Hero");
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 100,
    damping: 30,
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  };

  const consoleReveal = {
    hidden: { opacity: 0, y: 70, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, delay: 0.4, ease: easeOutExpo },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-0 w-full pt-28 pb-16 overflow-hidden flex flex-col justify-center min-h-[95vh] scanline-overlay noise-overlay"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <BackgroundGrid />
      </motion.div>

      <FloatingShapes />

      {/* Content */}
      <motion.div
        className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col items-center space-y-6 text-center relative z-10"
        style={{ opacity: contentOpacity, y: contentY }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight max-w-4xl uppercase"
        >
          {t("headline1")}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#263071] to-[#3b82f6] dark:from-blue-400 dark:via-indigo-200 dark:to-white animate-text-shimmer">
            {t("headline2")}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mx-auto max-w-2xl text-sm md:text-base text-foreground/70 dark:text-gray-400 leading-relaxed normal-case"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="pt-2 flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg" href="/demo" className="px-6 py-3 text-sm uppercase tracking-wider">
            {t("ctaDemo")}
          </Button>
          <Button variant="outline" size="lg" href="#features" className="px-6 py-3 text-sm uppercase tracking-wider">
            {t("ctaSpecs")}
          </Button>
        </motion.div>

        {/* Console */}
        <motion.div variants={consoleReveal} className="w-full max-w-4xl pt-8">
          <div className="relative w-full rounded-none border border-border-custom bg-[var(--console-bg)] shadow-glow overflow-hidden group">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: easeOutExpo }}
              className="px-4 py-2 border-b border-border-custom bg-[var(--console-header)] flex items-center justify-between text-[10px] text-foreground/60"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1, type: "spring" }} className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-1 pl-2 border-l border-border-custom">
                  <Terminal className="h-3 w-3 text-[#3b82f6]" />
                  <span className="tracking-wider">{t("terminal.title")}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                <span className="tracking-wider text-[#3b82f6]">{t("terminal.syncActive")}</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 min-h-[300px]">
              {/* Terminal */}
              <div className="md:col-span-1 border-r border-border-custom p-4 text-left text-[9px] leading-5 text-foreground/50 flex flex-col justify-between bg-[var(--console-header)]/40">
                <div className="space-y-1">
                  {terminalKeys.map((key, i) => (
                    <motion.p
                      key={key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + i * 0.06, duration: 0.35, ease: easeOutExpo }}
                      className={terminalColors[i]}
                    >
                      {t(key)}
                    </motion.p>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="pt-4 border-t border-border-custom text-[8px] text-foreground/45"
                >
                  <p>CPU: 12.4% | MEM: 4.8 GB</p>
                  <p className="text-green-600 dark:text-green-500 font-bold">{t("terminal.cacheActive")}</p>
                </motion.div>
              </div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 1.2, ease: easeOutExpo }}
                className="md:col-span-2 relative aspect-[16/10] md:aspect-auto w-full bg-black/5 overflow-hidden flex items-center justify-center"
              >
                <video autoPlay loop muted playsInline poster="/ship.jpg" className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-85">
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, ease: easeOutExpo }}
                  className="absolute bottom-3 right-3 bg-black/75 border border-white/10 px-2 py-1 rounded-none text-[8px] text-white/80 tracking-widest pointer-events-none"
                >
                  CAM_01_VESSEL_SAT
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute size-8 border border-blue-500/20 rounded-full flex items-center justify-center pointer-events-none"
                >
                  <div className="size-1.5 bg-blue-500 rounded-full" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}