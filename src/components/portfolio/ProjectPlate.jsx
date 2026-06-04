import { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function ProjectPlate({ index, title, description, image, specs }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');
  const plateRef = useRef(null);

  // Magnetic tilt
  const rawX = useSpring(0, { stiffness: 180, damping: 22 });
  const rawY = useSpring(0, { stiffness: 180, damping: 22 });

  // Reduced tilt so the card does not get clipped
  const rotateX = useTransform(rawY, [-1, 1], [3, -3]);
  const rotateY = useTransform(rawX, [-1, 1], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = plateRef.current?.getBoundingClientRect();
    if (!rect) return;

    rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <AnimatedSection
      delay={index * 0.1}
      className="flex-shrink-0 w-[82vw] md:w-[66vw] max-w-[900px] h-full flex flex-col px-2 md:px-3"
    >
      <motion.div
        ref={plateRef}
        className="h-full grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-5 p-1"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Text Side */}
        <div
          className="h-full min-h-0 flex flex-col rounded-2xl border border-white/50 p-4 md:p-5 backdrop-blur-xl shadow-[0_4px_20px_0_rgba(0,120,160,0.10),0_2px_0_0_rgba(255,255,255,0.60)_inset]"
          style={{
            background: 'rgba(255,255,255,0.50)',
          }}
        >
          {/* Index + Title */}
          <div className="flex items-baseline gap-3 mb-4">
            <motion.span
              className="font-mono text-3xl md:text-5xl font-bold tracking-tighter"
              animate={{
                color: hovered ? 'hsl(195 90% 42%)' : 'hsl(190 40% 72%)',
              }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </motion.span>

            <h3 className="font-sans text-lg md:text-2xl font-bold tracking-tighter text-foreground">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-mono text-xs text-muted-foreground leading-relaxed flex-1 overflow-hidden">
            {description}
          </p>

          {/* Spec Sheet */}
          <motion.div
            className="font-mono text-xs grid grid-cols-1 gap-y-3 rounded-xl p-4 mt-5 backdrop-blur-xl border border-white/50 shadow-[0_2px_12px_0_rgba(0,120,160,0.08),0_1px_0_0_rgba(255,255,255,0.55)_inset]"
            style={{
              background: 'rgba(255,255,255,0.42)',
            }}
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {specs.map((spec, i) => (
              <motion.div
                key={spec.key}
                className="flex items-center justify-between gap-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.06,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-[10px] text-muted-foreground tracking-widest">
                  {spec.key}
                </p>
                <p className="text-foreground font-medium text-right">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image Side */}
        <div className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(0,180,220,0.20),0_2px_0_0_rgba(255,255,255,0.6)_inset]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Shine sweep on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, x: '-100%' }}
            animate={
              hovered
                ? { opacity: [0, 0.5, 0], x: ['-100%', '150%'] }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              background:
                'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)',
            }}
          />

         
        </div>
      </motion.div>
    </AnimatedSection>
  );
}