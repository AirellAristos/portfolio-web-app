"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProjectComponents() {
  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-40 bg-[#a7f3d0] flex flex-col gap-10"
    >
      <h2 className="text-3xl font-bold border-b-4 border-black pb-2 w-fit">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.hasna_medika.mobile_hasna&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-[#fefefe] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-2">Mobile Hasna Medika</h3>
            <p className="mb-4 text-lg">
              A mobile queue management application developed for <strong>Hasna Medika</strong>,
              designed to streamline patient registration and appointment processes while improving
              service efficiency and user convenience.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-200 px-3 py-1 rounded-full">Flutter</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">MySQL</span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="p-6 bg-[#fefefe] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:border-black cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">This Portfolio Site</h3>
            <p className="mb-4 text-lg">
              A personal portfolio website built to showcase my projects, skills, and experiences in software development.
              Designed with a clean and responsive layout to provide an engaging and accessible user experience.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-200 px-3 py-1 rounded-full">Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
