import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ResumeTimeline from '../components/portfolio/ResumeTimeline';
import OutputTerminal from '../components/portfolio/OutputTerminal';
import AnimatedSection from '../components/portfolio/AnimatedSection';

export default function Resume() {
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Ayaan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-[calc(100vh-3.5rem)] px-6 md:px-12 max-w-[1400px] mx-auto py-8">
      {/* Header */}
      <div className="pt-16 md:pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">
            // RESUME_LEDGER
          </p>
          <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            MY <span className="text-primary">EXPERIENCE</span>
          </h2>
        </motion.div>
      </div>

      {/* Two Column Layout */}
      <AnimatedSection delay={0.15}>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 rounded-2xl backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(0,180,220,0.15),0_2px_0_0_rgba(255,255,255,0.6)_inset] p-6 md:p-10"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.50) 0%, rgba(180,235,245,0.38) 100%)' }}
        >
          {/* Left - The Document */}
          <div className="lg:col-span-8 lg:pr-10 lg:border-r border-white/40">
            <ResumeTimeline />
          </div>

          {/* Right - Output Terminal (sticky) */}
          <AnimatedSection delay={0.3} direction="left" className="lg:col-span-4 lg:pl-8">
            <div className="lg:sticky lg:top-20">
              <OutputTerminal />
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Download Button */}
      <AnimatedSection delay={0.4} className="border-t border-border py-12">
        <motion.button
          onClick={handleDownload}
          className="w-full py-5 rounded-2xl font-mono text-sm tracking-widest text-white
            flex items-center justify-center gap-3 min-h-[44px]
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          style={{ background: 'linear-gradient(135deg, hsl(195 90% 42%) 0%, hsl(160 70% 45%) 100%)', boxShadow: '0 4px 20px 0 rgba(0,180,220,0.30), 0 1px 0 0 rgba(255,255,255,0.35) inset' }}
          whileHover={{ scale: 1.015, boxShadow: '0 10px 40px 0 rgba(0,180,220,0.50), 0 1px 0 0 rgba(255,255,255,0.35) inset' }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          <Download className="w-4 h-4" />
          [EXECUTE_RESUME_DOWNLOAD.PDF]
        </motion.button>
      </AnimatedSection>
    </div>
  );
}