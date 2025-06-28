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
    console.log("StarfieldBackground mounted and running on client");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("[Starfield] canvasRef.current is null in animation setup");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("[Starfield] canvas.getContext('2d') is null");
      return;
    }
    let width = window.innerWidth, height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    console.log("[Starfield] Animation setup running, canvas and context available");

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
      // Draw a huge black rectangle for visibility
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.8;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      // Draw a large white rectangle
      ctx.fillStyle = "white";
      ctx.globalAlpha = 0.7;
      ctx.fillRect(50, 50, 400, 200);
      ctx.globalAlpha = 1;
      // Draw giant 'HELLO' text
      ctx.font = "100px Arial";
      ctx.fillStyle = "yellow";
      ctx.fillText("HELLO", 100, 300);
      // Draw stars
      for (const star of stars.current) {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, 2 * Math.PI); // much larger
        ctx.fillStyle = `#fff`; // bright white
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
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
  },[])

  // Only render on client after mount to avoid SSR hydration mismatch
  if (!mounted) return null;
  if (mounted) {
    console.log("StarfieldBackground portal rendering to document.body");
  }
  return mounted ? createPortal(
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "auto",
        zIndex: 9999,
        opacity: 1,
        border: "4px solid red",
        background: "transparent",
        filter: "none",
        transition: "none"
      }}
      aria-hidden="false"
    />,
    typeof window !== "undefined" ? document.body : (null as any)
  ) : null;
}
