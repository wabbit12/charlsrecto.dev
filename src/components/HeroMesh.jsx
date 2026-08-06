import { useEffect, useRef } from 'react';

/**
 * Interactive aqueous mesh: a grid that ripples away from the cursor.
 * Designed as a hero background for the dark portfolio palette.
 */
export default function HeroMesh() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: undefined, y: undefined });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    const points = [];
    const gridSize = 46;
    const parent = canvas.parentElement;

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.z = 0;
      }

      update() {
        if (mousePos.current.x === undefined) {
          this.x += (this.originX - this.x) * 0.1;
          this.y += (this.originY - this.y) * 0.1;
          this.z += (0 - this.z) * 0.1;
          return;
        }

        const dx = this.x - mousePos.current.x;
        const dy = this.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) / maxDist;
          this.x += Math.cos(angle) * force * 5;
          this.y += Math.sin(angle) * force * 5;
          this.z = force * 20;
        }

        this.x += (this.originX - this.x) * 0.1;
        this.y += (this.originY - this.y) * 0.1;
        this.z += (0 - this.z) * 0.1;
      }
    }

    const init = () => {
      points.length = 0;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push(new Point(i * gridSize, j * gridSize));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      points.forEach((p) => p.update());

      // Soft glow under the cursor
      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      if (mx !== undefined && my !== undefined) {
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 180);
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
        glow.addColorStop(0.35, 'rgba(255, 255, 255, 0.08)');
        glow.addColorStop(0.7, 'rgba(255, 255, 255, 0.02)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(mx - 180, my - 180, 360, 360);
      }

      // Soft top blend into the page
      const fade = ctx.createLinearGradient(0, 0, 0, canvas.height);
      fade.addColorStop(0, 'rgba(250, 250, 250, 0)');
      fade.addColorStop(0.1, 'rgba(250, 250, 250, 0.1)');
      fade.addColorStop(0.28, 'rgba(250, 250, 250, 0.2)');
      fade.addColorStop(0.55, 'rgba(250, 250, 250, 0.22)');
      fade.addColorStop(0.85, 'rgba(163, 163, 163, 0.14)');
      fade.addColorStop(1, 'rgba(163, 163, 163, 0)');
      ctx.strokeStyle = fade;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p1 = points[i * (rows + 1) + j];
          const p2 = points[i * (rows + 1) + (j + 1)];
          const p3 = points[(i + 1) * (rows + 1) + j];

          const nearGlow = p1 && p1.z > 2;

          if (p1 && p2) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 1 + p1.z / 10;
            if (nearGlow) {
              ctx.shadowColor = 'rgba(255, 255, 255, 0.55)';
              ctx.shadowBlur = 8 + p1.z * 0.6;
            } else {
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }
          if (p1 && p3) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineWidth = 1 + p1.z / 10;
            if (nearGlow) {
              ctx.shadowColor = 'rgba(255, 255, 255, 0.55)';
              ctx.shadowBlur = 8 + p1.z * 0.6;
            } else {
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      const rect = parent?.getBoundingClientRect() ?? {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      // CSS-pixel canvas so mouse coords map 1:1 without DPR scaling issues
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      init();
    };

    const toLocal = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const handleMouseMove = (e) => {
      const local = toLocal(e.clientX, e.clientY);
      const inside =
        local.x >= 0 &&
        local.y >= 0 &&
        local.x <= canvas.width &&
        local.y <= canvas.height;
      mousePos.current = inside ? local : { x: undefined, y: undefined };
    };

    const handleMouseOut = () => {
      mousePos.current = { x: undefined, y: undefined };
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      const local = toLocal(e.touches[0].clientX, e.touches[0].clientY);
      const inside =
        local.x >= 0 &&
        local.y >= 0 &&
        local.x <= canvas.width &&
        local.y <= canvas.height;
      mousePos.current = inside ? local : { x: undefined, y: undefined };
    };

    const handleTouchEnd = () => {
      mousePos.current = { x: undefined, y: undefined };
    };

    const observer = new ResizeObserver(resizeCanvas);
    if (parent) observer.observe(parent);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
