import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TechStackMarqueeComponent() {
    return <section className="relative py-2 border-y-4 border-black bg-pink-300 overflow-hidden">
        {/* Fade kiri */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-pink-300 via-pink-300/70 to-transparent z-10"></div>

        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-pink-300 via-pink-300/70 to-transparent z-10"></div>

        <Marquee
            direction="left"
            speed={50}
            autoFill={true}
            pauseOnHover={true}
            className="flex items-center"
        >
            {[
                { src: "/images/logos/Flutter Logotype.png", alt: "Flutter", width: 60 },
                { src: "/images/logos/Golang.png", alt: "Golang", width: 80 },
                { src: "/images/logos/Java.png", alt: "Java", width: 60 },
                { src: "/images/logos/Laravel Logotype.png", alt: "Laravel", width: 60 },
                { src: "/images/logos/Next JS Logotype.png", alt: "Next.js", width: 60 },
                { src: "/images/logos/PHP Logotype.png", alt: "PHP", width: 60 },
                { src: "/images/logos/Python Logotype.png", alt: "Python", width: 60 },
            ].map((tech, i) => (
                <div
                    key={i}
                    className={`px-10 transition-transform duration-300 ${i % 2 === 0
                        ? "hover:-translate-y-1 hover:rotate-[-3deg]"
                        : "hover:-translate-y-1 hover:rotate-[3deg]"
                        }`}
                >
                    <Image
                        src={tech.src}
                        alt={tech.alt}
                        width={tech.width}
                        height={tech.width}
                        className="object-contain filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                    />
                </div>
            ))}
        </Marquee>
    </section>
}