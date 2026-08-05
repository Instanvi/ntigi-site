"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let gridNeedsRedraw = true;
    let time = 0;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      width = rect.width;
      height = rect.height;
      gridNeedsRedraw = true;

      offscreenCanvasRef.current = document.createElement('canvas');
      offscreenCanvasRef.current.width = canvas.width;
      offscreenCanvasRef.current.height = canvas.height;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const drawGrid = () => {
      if (!offscreenCanvasRef.current) return;
      const offCtx = offscreenCanvasRef.current.getContext("2d");
      if (!offCtx) return;

      const dpr = window.devicePixelRatio || 1;
      offCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isDark = document.documentElement.classList.contains("dark");
      offCtx.clearRect(0, 0, width, height);
      
      // Ultra-subtle grid
      offCtx.strokeStyle = isDark ? "rgba(59, 130, 246, 0.03)" : "rgba(38, 48, 113, 0.025)";
      offCtx.lineWidth = 0.5;
      const gridSize = 60;

      // Draw grid lines
      for (let x = 0; x < width; x += gridSize) {
        offCtx.beginPath();
        offCtx.moveTo(x, 0);
        offCtx.lineTo(x, height);
        offCtx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        offCtx.beginPath();
        offCtx.moveTo(0, y);
        offCtx.lineTo(width, y);
        offCtx.stroke();
      }

      // Add subtle intersection dots
      offCtx.fillStyle = isDark ? "rgba(59, 130, 246, 0.08)" : "rgba(38, 48, 113, 0.06)";
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          offCtx.beginPath();
          offCtx.arc(x, y, 1, 0, Math.PI * 2);
          offCtx.fill();
        }
      }
    };

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 8; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 2,
        opacity: 0.15 + Math.random() * 0.15,
      });
    }

    // Subtle pulsing orbs
    const orbs: Array<{
      x: number;
      y: number;
      radius: number;
      phase: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 3; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 80 + Math.random() * 120,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.001,
      });
    }

    const draw = () => {
      // If user prefers reduced motion, draw static grid only
      if (prefersReducedMotion) {
        if (gridNeedsRedraw && offscreenCanvasRef.current) {
          drawGrid();
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(offscreenCanvasRef.current, 0, 0);
          gridNeedsRedraw = false;
        }
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw grid from offscreen canvas
      if (gridNeedsRedraw && offscreenCanvasRef.current) {
        drawGrid();
        gridNeedsRedraw = false;
      }
      
      if (offscreenCanvasRef.current) {
        ctx.drawImage(offscreenCanvasRef.current, 0, 0);
      }

      const isDark = document.documentElement.classList.contains("dark");
      time += 0.01;

      // Draw subtle pulsing orbs (ambient glow)
      orbs.forEach((orb) => {
        const pulse = Math.sin(time * orb.speed + orb.phase) * 0.5 + 0.5;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        
        if (isDark) {
          gradient.addColorStop(0, `rgba(59, 130, 246, ${0.02 * pulse})`);
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.01 * pulse})`);
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        } else {
          gradient.addColorStop(0, `rgba(38, 48, 113, ${0.015 * pulse})`);
          gradient.addColorStop(0.5, `rgba(38, 48, 113, ${0.008 * pulse})`);
          gradient.addColorStop(1, "rgba(38, 48, 113, 0)");
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      // Update and draw connection nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        const nodeColor = isDark ? "59, 130, 246" : "38, 48, 113";
        gradient.addColorStop(0, `rgba(${nodeColor}, ${node.opacity})`);
        gradient.addColorStop(0.5, `rgba(${nodeColor}, ${node.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${nodeColor}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle connections between nearby nodes
      const maxDistance = 250;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = ((maxDistance - distance) / maxDistance) * 0.08;
            ctx.strokeStyle = isDark 
              ? `rgba(59, 130, 246, ${opacity})` 
              : `rgba(38, 48, 113, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Canvas for animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      
      {/* Subtle gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#263071]/[0.02] via-transparent to-[#3b82f6]/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#263071]/[0.015]" />
    </div>
  );
}
