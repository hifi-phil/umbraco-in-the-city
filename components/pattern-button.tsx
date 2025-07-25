import Image from "next/image"

interface PatternButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function PatternButton({ children, onClick, className = "" }: PatternButtonProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Button */}
      <button
        onClick={onClick}
        className="bg-brand-yellow text-black font-share-tech text-xl pr-7 py-2 hover:bg-yellow-400 transition-colors relative z-10 flex items-center justify-center gap-2 pl-12 overflow-hidden"
      >
        {/* Left side pattern */}
        <div className="absolute left-0 top-0">
          <Image
            src="/assets/button-pattern.svg"
            alt=""
            width={38}
            height={97}
            className="h-full w-auto object-contain"
          />
        </div>
        {children}
      </button>
    </div>
  )
}