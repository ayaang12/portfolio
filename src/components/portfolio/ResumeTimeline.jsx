const experiences = [
  {
    period: 'JUN 2024 — PRESENT',
    role: 'Tutor & Grader',
    company: 'Mathnasium · Lake Hiawatha, NJ',
    description: 'Provided one-on-one support to help students understand difficult math topics. Graded math work and tests.',
    tags: ['Tutoring', 'Math', 'Communication'],
  },
  {
    period: 'SEP 2020 — PRESENT',
    role: 'Secretary — Teen Advisory Board',
    company: 'Montville Township Public Library · Montville, NJ',
    description: 'Planned and ran events for children, teens, and adults. Recorded meeting minutes, assisted guests, and helped kids engage with culture, science, and technology.',
    tags: ['Leadership', 'Event Planning', 'Organization'],
  },
  {
    period: 'SEP 2023 — PRESENT',
    role: 'Mechanical & Programming Sub-leader',
    company: 'FIRST Robotics Competition · MCST',
    description: 'Led a sub-team to design, build, and program a competition robot. Worked with wiring, metal fabrication, and collaborated on strategic solutions.',
    tags: ['Robotics', 'Java', 'Engineering', 'Teamwork'],
  },
  {
    period: 'NOV 2024 — PRESENT',
    role: 'JV Wrestler',
    company: 'Montville Township High School · Montville, NJ',
    description: 'Competed at 175 and 190 lbs on the Junior Varsity team. Participated in tournaments and dual meets against other schools.',
    tags: ['Athletics', 'Discipline', 'Competition'],
  },
  {
    period: 'MAY 2025 — PRESENT',
    role: 'Co-President & Co-Founder — Muslim Student Association',
    company: 'Morris County School of Technology · Denville, NJ',
    description: 'Founded a club to create a welcoming space for Muslim and non-Muslim students. Planned fundraisers and dinners, and coordinated with chapters from Montville and Boonton High Schools.',
    tags: ['Leadership', 'Community', 'Event Planning'],
  },
];

const competitions = [
  { name: 'NJ HOSA', result: 'State Placer' },
  { name: 'NASA App Development Challenge', result: 'Competitor' },
  { name: 'Congressional App Challenge', result: 'Competitor' },
];

const education = [
  {
    period: '2023 — 2027',
    degree: 'High School Diploma (In Progress)',
    institution: 'Morris County School of Technology — Academy for Computer and Information Sciences',
    note: 'Denville, NJ · Class of 2027 · Focus: Computer Science & Information Technology',
  },
];

export default function ResumeTimeline() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <div>
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-6">
          // EDUCATION
        </p>
        {education.map((edu, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6">
            <p className="font-mono text-[11px] text-muted-foreground pt-1">{edu.period}</p>
            <div>
              <h4 className="font-sans text-lg font-bold tracking-tight text-foreground">{edu.degree}</h4>
              <p className="font-mono text-xs text-primary">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="border-t border-white/40 pt-8">
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-6">
          // ACTIVITY_LOG
        </p>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6">
              <p className="font-mono text-[11px] text-muted-foreground pt-1">{exp.period}</p>
              <div>
                <h4 className="font-sans text-lg font-bold tracking-tight text-foreground">{exp.role}</h4>
                <p className="font-mono text-xs text-primary mb-2">{exp.company}</p>
                <p className="text-sm text-foreground/70 leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitions */}
      <div className="border-t border-white/40 pt-8">
        <p className="font-mono text-[10px] text-muted-foreground tracking-widest mb-6">
          // COMPETITIONS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {competitions.map((c, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/50" style={{ background: 'rgba(0,180,220,0.05)' }}>
              <span className="font-mono text-primary text-xs mt-0.5">▸</span>
              <div>
                <p className="font-sans text-sm font-bold text-foreground">{c.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}