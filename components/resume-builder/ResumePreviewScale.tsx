"use client"

import { useEffect, useRef, useState } from "react"

const A4_WIDTH = 794
const A4_HEIGHT = 1123

export function ResumePreviewScale({children}: {children: React.ReactNode}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function updateScale() {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth

      // 🔥 calculate scale based on width
      const newScale = containerWidth / A4_WIDTH

      setScale(newScale)
    }

    updateScale()
    window.addEventListener("resize", updateScale)

    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex justify-center items-start overflow-auto  no-scrollbar"
    >
      <div
        style={{
          width: A4_WIDTH,
          height: A4_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {children}
      </div>
    </div>
  )
}