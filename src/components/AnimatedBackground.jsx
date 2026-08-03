import { motion } from 'framer-motion';
import { useMemo } from 'react';

function FloatingParticle({ delay, duration, x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size + 'px',
        height: size + 'px',
        left: x + '%',
        top: y + '%',
        boxShadow: `0 0 ${size * 4}px rgba(255,255,255,0.55)`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.25, 0.85, 0.25],
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: duration || 10 + Math.random() * 8,
        repeat: Infinity,
        delay: delay || 0,
        ease: 'easeInOut',
      }}
    />
  );
}

function LightBeam({ delay, duration, x, rotation }) {
  return (
    <motion.div
      className="absolute w-0.5 h-48"
      style={{
        left: x + '%',
        top: '0%',
        background:
          'linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)',
        transformOrigin: 'top center',
        transform: `rotate(${rotation}deg)`,
      }}
      animate={{
        y: [0, 1100],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: duration || 15 + Math.random() * 10,
        repeat: Infinity,
        delay: delay || 0,
        ease: 'linear',
      }}
    />
  );
}

function AnimatedOrbs() {
  return (
    <>
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          top: '0%',
          left: '0%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
          opacity: [0.55, 0.9, 0.55],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[650px] h-[650px] rounded-full blur-3xl"
        style={{
          bottom: '5%',
          right: '0%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -70, 0],
          scale: [1, 1.25, 1],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          top: '40%',
          left: '40%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </>
  );
}

export default function AnimatedBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2.5 + Math.random() * 4,
    }));
  }, []);

  const lightBeams = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 14 + Math.random() * 10,
      x: Math.random() * 100,
      rotation: Math.random() * 30 - 15,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <AnimatedOrbs />
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
          size={particle.size}
        />
      ))}
      {lightBeams.map((beam) => (
        <LightBeam
          key={`beam-${beam.id}`}
          delay={beam.delay}
          duration={beam.duration}
          x={beam.x}
          rotation={beam.rotation}
        />
      ))}
    </div>
  );
}
