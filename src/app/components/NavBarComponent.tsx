"use client"

import { Code } from "lucide-react";
import BurgerButton from "./buttons/BurgerButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBarComponent() {
    const [menuOpen, setMenuOpen] = useState(false)

    return <>
        <nav className="flex flex-wrap justify-between items-center py-4 px-10 lg:px-40 bg-[#fefefe] border-b-2 border-black sticky top-0 z-20">
            <div className="flex items-center gap-4">
                <Code size={32} />
                <p className="hidden sm:block text-lg font-bold">My Portfolio Site</p>
            </div>

            <a href="mailto:airell.aristo@gmail.com" className="hidden sm:block px-4 py-2 text-lg font-bold border-2 border-black bg-white hover:bg-black hover:text-white transition-colors">Contact</a>

            <BurgerButton onClick={() => setMenuOpen(!menuOpen)} />
        </nav>

        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 bg-yellow-300 border-b-8 border-black z-50 sm:hidden flex flex-col items-center justify-center gap-8"
                >
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-10 w-12 h-12 flex items-center justify-center text-3xl font-bold border-4 border-black bg-white hover:bg-black hover:text-white transition-colors"
                    >
                        ×
                    </button>

                    <a
                        href="mailto:airell.aristo@gmail.com"
                        onClick={() => setMenuOpen(false)}
                        className="px-8 py-4 text-2xl font-bold border-4 border-black bg-white hover:bg-black hover:text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                        Contact Me
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    </>
}