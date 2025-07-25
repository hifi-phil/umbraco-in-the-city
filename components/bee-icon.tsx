"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface BeeIconProps {
  variant?: "default" | "footer"
  className?: string
}

export default function BeeIcon({ variant = "default", className = "" }: BeeIconProps) {
  const isFooter = variant === "footer"
  const [currentFrame, setCurrentFrame] = useState(5) // Start with static frame (state6 - index 5)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Animation frames in order
  const frames = [
    "/assets/bee-frames/bee-state1.svg",
    "/assets/bee-frames/bee-state2.svg", 
    "/assets/bee-frames/bee-state3.svg",
    "/assets/bee-frames/bee-state4.svg",
    "/assets/bee-frames/bee-state5.svg",
    "/assets/bee-frames/bee-state6.svg"
  ]
  
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length)
      }, 10) // 10ms per frame for faster wing flutter
    } else {
      setCurrentFrame(5) // Reset to static state (state6)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAnimating, frames.length])
  
  const handleMouseEnter = () => {
    setIsAnimating(true)
  }
  
  const handleMouseLeave = () => {
    setIsAnimating(false)
  }
  
  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Set CSS custom properties based on variant
        "--bee-wing-color": isFooter ? "#FFCC33" : "#171717",
        "--bee-body-color": isFooter ? "#171717" : "#FFCC33"
      } as React.CSSProperties}
    >
      <div className="relative group-hover:animate-buzz-hover">
        <Image
          src={frames[currentFrame]}
          alt={isFooter ? "Bee Logo" : "Bee Icon"}
          width={isFooter ? 96 : 80}
          height={isFooter ? 68 : 70}
          className={`w-${isFooter ? "24" : "20"} h-auto transition-transform duration-75`}
        />
      </div>
    </div>
  )
}