"use client"

interface BurgerButtonProps {
    onClick: () => void
}
export default function BurgerButton({ onClick }: Readonly<BurgerButtonProps>) {
    return (
        <button
            onClick={onClick}
            className="relative sm:hidden flex flex-wrap flex-col justify-between w-10 h-10 p-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100">
            <span className="block h-1 w-full bg-black rounded-sm" />
            <span className="block h-1 w-full bg-black rounded-sm" />
            <span className="block h-1 w-full bg-black rounded-sm" />
        </button>
    )
}