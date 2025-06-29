"use client"
import { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"

// Simple performant starfield using Canvas
export function StarfieldBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stars = useRef<{x:number,y:number,z:number,s:number}[]>([])
  const numStars = 300

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Init stars
    stars.current = Array.from({length:numStars}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.5 + 0.5,
      s: Math.random() * 1.2 + 0.6
    }));

    let animationId:number;
    function draw(t:number) {
      ctx.clearRect(0,0,width,height);
      
      // Draw stars
      for (const star of stars.current) {
        ctx.save();
        ctx.globalAlpha = star.z;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, 2 * Math.PI);
        ctx.fillStyle = `hsl(${180 + Math.sin(t * 0.001 + star.x * 0.01) * 30}, 70%, ${60 + star.z * 40}%)`;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = star.s * 2;
        ctx.fill();
        ctx.restore();
      }
      animationId = requestAnimationFrame(draw);
    }
    animationId = requestAnimationFrame(draw);

    // Parallax on mouse move
    function onMove(e: MouseEvent) {
      const dx = (e.clientX - width/2)/width
      const dy = (e.clientY - height/2)/height
      for (const star of stars.current) {
        star.x += dx * star.z * 2
        star.y += dy * star.z * 2
        // Wrap
        if (star.x < 0) star.x += width
        if (star.x > width) star.x -= width
        if (star.y < 0) star.y += height
        if (star.y > height) star.y -= height
      }
    }
    window.addEventListener("mousemove", onMove)
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("resize", onResize)
    }
  },[mounted])

  // Only render on client after mount to avoid SSR hydration mismatch
  if (!mounted) return null;
  
  return mounted ? createPortal(
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0.6,
        background: "transparent"
      }}
      aria-hidden="true"
    />,
    typeof window !== "undefined" ? document.body : (null as any)
  ) : null;
}