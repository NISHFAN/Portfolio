import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Undergraduate Trainee',
    company: 'CWMACKIE PLC (Scan Division)',
    date: '2025',
    type: 'Internship',
    points: [
      'Created detailed technical drawings and layouts using AutoCAD.',
      'Designed mechanical components and assemblies using SolidWorks.',
      'Planned and maintained maintenance workflows for heavy industrial machinery.'
    ]
  },
  {
    role: 'Academic Projects & Research',
    company: 'Uva Wellassa University',
    date: '2021 — 2025',
    type: 'Academic',
    points: [
      'Developed real-time machine health monitoring system with DBM for anomaly detection.',
      'Built a mobile-controlled Arduino home assistant with manual switch overrides.',
      'Completed CNC design and G-code execution projects for CAD/CAM coursework.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-24">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-tech-text flex items-baseline gap-4 tracking-tighter leading-none drop-shadow-lg">
              <span className="text-tech-cyan font-mono text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-widest">04.</span>
              Experience<span className="text-tech-cyan">.</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-tech-violet/40 to-transparent flex-grow ml-4 md:ml-8"></div>
          </div>

          <div className="relative border-l-2 border-tech-violet/30 ml-4 md:ml-10 space-y-20 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 md:pl-20 group"
              >
                {/* Premium Timeline Pulsing Dot */}
                <div className="absolute w-6 h-6 rounded-full bg-tech-bg border-[5px] border-tech-cyan -left-[13px] top-2 ring-[6px] ring-tech-bg group-hover:scale-125 group-hover:bg-tech-cyan transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>

                <div className="bg-tech-card/80 backdrop-blur-3xl border border-tech-violet/20 rounded-[2rem] p-10 lg:p-12 hover:border-tech-cyan/40 hover:bg-tech-card transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-baseline xl:justify-between mb-6 gap-4">
                      <h3 className="text-2xl sm:text-3xl font-black text-tech-text tracking-tight leading-tight">
                        {exp.role} <br className="hidden sm:block xl:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-violet xl:ml-2">@ {exp.company}</span>
                      </h3>
                      <div className="text-sm font-mono font-bold text-tech-cyan mt-2 xl:mt-0 bg-tech-cyan/10 border border-tech-cyan/20 px-4 py-1.5 rounded-full w-fit whitespace-nowrap hidden sm:block">
                        {exp.date}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <h4 className="text-xs sm:text-sm font-black text-tech-violet uppercase tracking-[0.2em]">{exp.type}</h4>
                      <div className="sm:hidden text-xs font-mono font-bold text-tech-cyan bg-tech-cyan/10 px-3 py-1 rounded-full border border-tech-cyan/20">
                        {exp.date}
                      </div>
                    </div>

                    <ul className="space-y-5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-tech-muted font-medium text-base sm:text-lg leading-relaxed group/point">
                          <span className="text-tech-cyan/60 mr-5 mt-1 sm:mt-1.5 text-lg leading-none group-hover/point:text-tech-cyan group-hover/point:translate-x-1 transition-all duration-300">▹</span>
                          <span className="group-hover/point:text-tech-text transition-colors duration-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
