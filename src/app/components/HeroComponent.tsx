import { Github, Linkedin } from "lucide-react";

export default function HeroComponent() {
    return <section className="relative bg-gradient-to-r from-yellow-300 to-pink-300 w-full py-20 px-6 text-center overflow-hidden">
        {/* Topography Pattern Overlay */}
        <div
            className="absolute inset-0 z-0"
            style={{
                backgroundColor: "#FDFDFD",
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.1'%3E%3Cpath d='M0 .5H40M.5 0V40'/%3E%3C/g%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
                backgroundSize: "40px 40px",
                opacity: 0.4,
            }}
        ></div>


        <h1 className="relative text-5xl font-bold mb-4 z-10">Hi, I'm Airell!</h1>
        <p className="relative text-xl mb-8 z-10">Software Developer</p>

        <div className="relative mb-8 z-10">
            <p className="text-sm font-bold mb-3 uppercase">Connect With Me:</p>
            <div className="flex justify-center flex-wrap gap-4">
                <a
                    href="https://github.com/AirellAristos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 border-4 border-black bg-yellow-300 font-bold 
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-x-[4px] hover:translate-y-[4px] 
        hover:shadow-none transition-all duration-150"
                >
                    <Github size={22} />
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/airellaristo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 border-4 border-black bg-cyan-300 font-bold 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
        hover:translate-x-[4px] hover:translate-y-[4px] 
        hover:shadow-none transition-all duration-150"
                >
                    <Linkedin size={22} />
                    LinkedIn
                </a>
            </div>
        </div>

    </section>
}