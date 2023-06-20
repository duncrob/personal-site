import React, { useEffect, useState } from "react";

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setMousePos({ x: event.clientX, y: event.clientY + scrollY })
    })
  }, [])

  return <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: "radial-gradient(600px at " + mousePos.x + "px " + mousePos.y +"px, rgba(29, 78, 216, 0.15), transparent 80%)"}}></div>
}