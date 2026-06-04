// AnimatedSection is now a plain passthrough wrapper — no animations.
// Only ScrambleText handles entrance effects.
export default function AnimatedSection({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}