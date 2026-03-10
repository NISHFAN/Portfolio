import { motion } from 'framer-motion';

const skills = {
  Programming: ['JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS'],
  Frameworks: ['React', 'Next.js', 'Tailwind CSS'],
  'AI & ML': ['Machine Learning', 'Deep Learning', 'OpenCV', 'TensorFlow', 'PyTorch'],
  Embedded: ['Arduino', 'ESP32', 'Sensors', 'IoT'],
  Tools: ['Git', 'VS Code', 'Figma', 'Node.js'],
  'Mechanical Design': ['SolidWorks', 'AutoCAD', 'MATLAB']
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-tech-text flex items-baseline gap-4 tracking-tighter leading-none drop-shadow-lg">
              <span className="text-tech-cyan font-mono text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-widest">02.</span>
              Core Expertise<span className="text-tech-cyan">.</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-tech-violet/40 to-transparent flex-grow ml-4 md:ml-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-tech-violet/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-tech-card/80 backdrop-blur-2xl border border-tech-violet/20 rounded-[2rem] p-10 hover:border-tech-cyan/40 hover:bg-tech-card hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <h3 className="text-2xl font-black text-tech-text mb-8 flex items-center gap-4 tracking-tight relative z-10">
                  <span className="text-tech-violet/80 group-hover:text-tech-cyan group-hover:translate-x-2 transition-all duration-500 text-3xl leading-none">▹</span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3 text-sm font-semibold relative z-10 mt-auto">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-tech-bg/50 border border-tech-violet/10 text-tech-muted group-hover:border-tech-cyan/30 group-hover:bg-tech-bg group-hover:text-tech-cyan transition-colors duration-500 shadow-inner"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
