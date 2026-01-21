import { motion } from 'framer-motion';

function FloatingParticle({ delay, duration, x, y, size, color }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size + 'px',
        height: size + 'px',
        left: x + '%',
        top: y + '%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.random() * 40 - 20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.2, 1],
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
      className="absolute w-1 h-32 opacity-30"
      style={{
        left: x + '%',
        top: '0%',
        background:
          'linear-gradient(to bottom, rgba(124, 58, 237, 0.6), transparent)',
        transformOrigin: 'top center',
        transform: `rotate(${rotation}deg)`,
      }}
      animate={{
        y: [0, 1000],
        opacity: [0.2, 0.5, 0.2],
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

function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
          bottom: '20%',
          right: '15%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

export default function AnimatedBackground() {
  const colors = [
    'rgba(124, 58, 237, 0.6)',
    'rgba(34, 211, 238, 0.6)',
    'rgba(168, 85, 247, 0.6)',
    'rgba(236, 72, 153, 0.5)',
    'rgba(59, 130, 246, 0.5)',
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  const lightBeams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    x: Math.random() * 100,
    rotation: Math.random() * 30 - 15,
  }));

  return (
    <>
      <AnimatedGradient />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            color={particle.color}
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
    </>
  );
}

