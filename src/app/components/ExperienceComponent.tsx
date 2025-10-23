"use client";

import { motion } from "framer-motion";

export default function ExperienceComponent() {
    return (
        <motion.section
            id="experience"
            className="py-20 px-6 lg:px-40 bg-[#e9d5ff] border-b-4 border-black"
        >
            <motion.h2
                className="text-3xl font-bold border-b-4 border-black pb-2 w-fit mb-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Experience
            </motion.h2>

            <motion.div
                className="relative border-l-4 border-black"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="mb-10 ml-6">
                    <motion.div
                        className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    />
                    <motion.h3
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        IT Staff
                    </motion.h3>
                    <motion.p
                        className="text-sm text-gray-700 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Hasna Medika Group • 2024 - Present
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-xl"
                    >
                        Developed and maintained web and mobile applications using Flutter, Next.js, and NestJS, with a focus on clean architecture, state management, and API integration. Built backend systems, including a cron scheduler for automatic data synchronization with the Satu Sehat API, ensuring reliability and maintainability. Optimized performance, designed databases, and collaborated with teams to deliver user-friendly digital experiences.
                    </motion.p>
                </div>
            </motion.div>
        </motion.section>
    );
}
