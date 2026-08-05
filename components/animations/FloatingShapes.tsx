"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Large outer ring */}
            <motion.div
                className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full border border-blue-500/[0.07]"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full border border-dashed border-[#263071]/[0.05]"
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            />

            {/* Second ring cluster */}
            <motion.div
                className="absolute bottom-[10%] right-[8%] w-[400px] h-[400px] rounded-full border border-blue-500/[0.06]"
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating data nodes */}
            {[
                { left: "10%", top: "25%", size: 3, delay: 0, duration: 5 },
                { left: "85%", top: "20%", size: 2, delay: 1, duration: 6 },
                { left: "75%", top: "60%", size: 4, delay: 2, duration: 7 },
                { left: "20%", top: "70%", size: 2.5, delay: 0.5, duration: 4.5 },
                { left: "50%", top: "15%", size: 2, delay: 1.5, duration: 5.5 },
                { left: "90%", top: "80%", size: 3, delay: 2.5, duration: 6.5 },
            ].map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-500/30"
                    style={{
                        left: node.left,
                        top: node.top,
                        width: node.size,
                        height: node.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: node.delay,
                    }}
                />
            ))}

            {/* Horizontal data lines */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={`line-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                    style={{
                        top: `${30 + i * 20}%`,
                        left: 0,
                        right: 0,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.2,
                    }}
                />
            ))}

            {/* Glowing orb */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/[0.03] blur-3xl animate-glow-breathe"
            />
            <motion.div
                className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#263071]/[0.03] blur-3xl animate-glow-breathe"
                style={{ animationDelay: "3s" }}
            />
        </div>
    );
}