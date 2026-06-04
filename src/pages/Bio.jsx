import SystemStatus from '../components/portfolio/SystemStatus';
import HoverWord from '../components/portfolio/HoverWord';
import AnimatedSection from '../components/portfolio/AnimatedSection';
import ScrambleText from '../components/portfolio/ScrambleText';

const stats = [];

export default function Bio() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] px-6 md:px-12 max-w-[1400px] mx-auto py-8">
      {/* Hero */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-16 md:pt-20 pb-8 rounded-3xl backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(0,120,160,0.14),0_2px_0_0_rgba(255,255,255,0.80)_inset] p-6 md:p-10"
        style={{ background: 'rgba(255,255,255,0.50)' }}
      >
        {/* Left - Manifesto */}
        <div className="lg:col-span-8 lg:pr-10 lg:border-r border-white/40">
          <AnimatedSection delay={0}>
            <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6">
              // PROFESSIONAL_SUMMARY
            </p>
          </AnimatedSection>

          {/* Scramble-decode title */}
          <div className="mb-8">
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-sans font-900 leading-[0.9] tracking-tighter">
              <ScrambleText text="AYAAN" delay={0.1} className="block text-foreground" />
              <ScrambleText text="GILL" delay={0.35} className="block bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent" />
            </h1>
          </div>

          <AnimatedSection delay={0.45}>
            <div className="max-w-2xl space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                I’m a rising senior at the Morris County School of Technology and an aspiring software engineer. I’ve been coding for a few years and have experience with Java, Python, and game development in Godot. I enjoy working on projects that let me be creative, solve problems, and learn new skills. I’m organized, easy to work with, and always looking for ways to improve as a developer.
              </p>
              
              <p className="font-mono text-sm text-muted-foreground">
                Currently looking for internships, research opportunities, and
                open-source collaborations. Feel free to reach out!
              </p>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/40 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">{stat.label}</p>
                <p className="font-sans text-3xl font-bold tracking-tighter text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - System Status */}
        <AnimatedSection delay={0.3} direction="left" className="lg:col-span-4 lg:pl-8 pt-4">
          <SystemStatus />
        </AnimatedSection>
      </div>
    </div>
  );
}