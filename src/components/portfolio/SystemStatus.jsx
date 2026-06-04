import { useState, useEffect } from 'react';

function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Blink() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn(v => !v), 600);
    return () => clearInterval(id);
  }, []);
  return <span style={{ opacity: on ? 1 : 0 }}>▮</span>;
}

export default function SystemStatus() {
  const now = useLiveClock();

  const timeStr = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York',
  });

  const statusItems = [
    { key: 'STATUS', value: 'OPEN_TO_WORK', live: false },
    { key: 'LOCATION', value: 'NYC_METRO', live: false},
    { key: 'PHONE', value: '+1(551)-364-799', live: false },
    { key: 'EMAIL', value: 'gill.aa0902@gmail.com', live: false },
  ];

  const stack = ['PYTHON', 'JAVA', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NODE.JS', 'SQL', 'C++', 'GIT', 'GODOT', 'CLI'];

  return (
    <div
      className="font-mono text-xs space-y-6 rounded-2xl p-5 backdrop-blur-2xl border border-white/70 shadow-[0_8px_32px_0_rgba(0,160,210,0.20),0_1px_0_0_rgba(255,255,255,0.92)_inset,inset_0_-1px_0_rgba(0,180,220,0.12)]"
      style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.70) 0%, rgba(210,248,255,0.48) 50%, rgba(160,230,240,0.32) 100%)' }}
    >
      <div>
        <p className="text-muted-foreground mb-3 tracking-widest text-[10px]">// CONTACT_ME</p>
        <div className="space-y-1.5">
          {statusItems.map((item) => (
            <div key={item.key} className="flex justify-between gap-4">
              <span className="text-muted-foreground">{item.key}</span>
              <span className={item.key === 'STATUS' ? 'text-primary font-bold' : 'text-foreground'}>
                {item.value}{item.live && <> <Blink /></>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <p className="text-muted-foreground mb-3 tracking-widest text-[10px]">// TECH_STACK</p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border border-border text-[10px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-100 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}