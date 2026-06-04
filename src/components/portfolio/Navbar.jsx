import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'BIO', index: '00' },
  { path: '/projects', label: 'PROJECTS', index: '01' },
  { path: '/resume', label: 'RESUME', index: '02' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-white/50 shadow-[0_2px_16px_0_rgba(0,120,160,0.10),0_1px_0_0_rgba(255,255,255,0.70)_inset]"
      style={{ background: 'rgba(255,255,255,0.52)' }}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/" className="font-mono text-sm font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
            ~/dev.portfolio
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-1 relative"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative font-mono text-xs px-4 py-2 min-w-[44px] min-h-[44px] flex items-center gap-2
                  transition-colors duration-200 rounded-lg
                  ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg border border-primary/30"
                    style={{ background: 'rgba(0,150,190,0.10)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="hidden sm:inline text-muted-foreground relative z-10">{link.index}</span>
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}