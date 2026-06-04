import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const clubs = [
  { role: 'Co-President & Founder', org: 'Muslim Student Association' },
  { role: 'Choreographer', org: 'Multicultural Club' },
  { role: 'Member · State Placer', org: 'NJ HOSA' },
  { role: 'Wrestler', org: 'Wrestling Team' },
  { role: 'Programming Sub-Team Member', org: 'FIRST Robotics Competition' },
];

export default function OutputTerminal() {
  return (
    <div className="font-mono text-xs space-y-6 rounded-2xl p-5 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_0_rgba(0,120,160,0.12),0_1px_0_0_rgba(255,255,255,0.80)_inset]" style={{ background: 'rgba(255,255,255,0.52)' }}>
      <div className="space-y-3">
        <p className="text-muted-foreground tracking-widest text-[10px] mb-3">// LINKS</p>
        <a
          href="https://www.linkedin.com/in/ayaan-gill-8952b43a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border hover:border-secondary/60 hover:text-secondary transition-colors duration-150 min-h-[44px] backdrop-blur-sm shadow-sm"
          style={{ background: 'rgba(255,255,255,0.45)', borderColor: 'rgba(270, 60%, 70%, 0.3)' }}
        >
          <Linkedin className="w-4 h-4 flex-shrink-0" />
          <span className="text-[11px] truncate">linkedin.com/in/ayaan-gill</span>
          <ArrowUpRight className="w-3 h-3 flex-shrink-0 ml-auto" />
        </a>

        <a
          href="https://github.com/ayaang12"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl border hover:border-accent/60 hover:text-accent transition-colors duration-150 min-h-[44px] backdrop-blur-sm shadow-sm"
          style={{ background: 'rgba(255,255,255,0.45)', borderColor: 'rgba(150, 70%, 48%, 0.3)' }}
        >
          <Github className="w-4 h-4 flex-shrink-0" />
          <span className="text-[11px] truncate">github.com/ayaang12</span>
          <ArrowUpRight className="w-3 h-3 flex-shrink-0 ml-auto" />
        </a>
      </div>

      <div className="border-t border-border pt-4 space-y-2">
        <p className="text-muted-foreground tracking-widest text-[10px] mb-3">// CLUBS_&_ACTIVITIES</p>
        {clubs.map((c, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-primary mt-0.5">▸</span>
            <div>
              <p className="text-foreground font-semibold text-[11px]">{c.org}</p>
              <p className="text-muted-foreground text-[10px]">{c.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}