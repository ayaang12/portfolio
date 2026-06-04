import { useState } from 'react';

const codeSnippets = {
  'full-stack': 'const app = express();\napp.use(cors());\napp.listen(3000);',
  'systems': 'fn main() {\n  let mut vm = VM::new();\n  vm.execute(bytecode);\n}',
  'scalable': 'replicas: 3\nstrategy:\n  type: RollingUpdate',
  'interfaces': 'const [state, dispatch] =\n  useReducer(reducer, init);',
  'architecture': 'class EventBus {\n  emit(event, data) {}\n  on(event, handler) {}\n}',
  'performance': 'cache.set(key, val, {\n  ttl: 3600,\n  stale: true\n});',
};

export default function HoverWord({ word, children }) {
  const [hovered, setHovered] = useState(false);
  const snippet = codeSnippets[word];

  if (!snippet) {
    return <span className="text-primary font-semibold">{children}</span>;
  }

  return (
    <span
      className="relative inline-block cursor-crosshair"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-primary font-semibold border-b border-primary/30 hover:border-primary transition-colors">
        {children}
      </span>
      {hovered && (
        <span className="absolute left-0 top-full mt-2 z-30 bg-foreground text-background font-mono text-[11px] p-3 whitespace-pre leading-relaxed border border-primary/20 animate-snap-in pointer-events-none">
          <span className="text-primary/70 block mb-1 text-[9px] tracking-widest">// {word.toUpperCase()}</span>
          {snippet}
        </span>
      )}
    </span>
  );
}