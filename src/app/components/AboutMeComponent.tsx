import Image from "next/image";

export default function AboutMeComponent() {
    return <section className="py-20 px-6 bg-[#fff176] border-b-4 border-black">
        <div className="flex flex-col md:flex-row items-center gap-10 px-10 lg:px-40 mx-auto">
            {/* Text Left */}
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-xl leading-relaxed font-medium">
                    I&apos;m a passionate Software Developer who enjoys building clean, user-focused applications. With a background in Informatics, I combine technical precision and creative problem-solving to craft meaningful digital experiences. I love working across the stack — from intuitive front-end design to efficient and secure back-end systems. For me, development is about solving real problems and turning ideas into impact.
                </p>
            </div>

            {/* Image Right */}
            <div className="flex-shrink-0 relative -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-pink-300">
                    <Image
                        src="/images/IMG_0454P_.jpg"
                        alt="About Airell"
                        width={320}
                        height={320}
                        className="object-cover grayscale w-full h-full object-top hover:grayscale-0 hover:scale-105 transition-all duration-300"
                    />
                </div>

                {/* Decorative element (optional) */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-300 border-4 border-black rotate-12"></div>
            </div>
        </div>
    </section>
}