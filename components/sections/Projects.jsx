import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiLock } from 'react-icons/fi';

const projects = [
  {
    title: 'Seratrix POS System',
    desc: 'A modern web-based Point of Sale (POS) system designed for restaurants and retail outlets. It provides order management, inventory tracking, and daily sales reporting with a clean and efficient interface.',
    tags: ['React.js', 'Node.js', 'Supabase'],
    href: 'https://qaswa-pos.vercel.app',
    live: 'https://qaswa-pos.vercel.app',
    isPrivate: true,
    year: '2025',
    colorFrom: 'from-tech-violet/40',
    colorTo: 'to-tech-cyan/20',
    accent: 'cyan'
  },
  {
    title: 'PC Corner E-commerce Website',
    desc: 'A full-stack e-commerce platform for selling computer hardware and accessories. It includes product browsing, cart management, checkout functionality, and an admin system for product and order management.',
    tags: ['React.js', 'Node.js', 'MySQL'],
    href: 'https://pc-corner-user.vercel.app',
    live: 'https://pc-corner-user.vercel.app',
    isPrivate: true,
    year: '2025',
    colorFrom: 'from-tech-cyan/40',
    colorTo: 'to-tech-violet/20',
    accent: 'violet'
  },
  {
    title: 'Machine Health Monitoring (DBM)',
    desc: 'Real-time monitoring of motor temperature, voltage, & vibration with a Deep Boltzmann Machine for anomaly detection. Shows alerts and visualizations.',
    tags: ['Python', 'Deep Learning', 'Sensors', 'Raspberry Pi'],
    href: '#',
    year: '2025',
    colorFrom: 'from-tech-violet/30',
    colorTo: 'to-tech-violet/10',
    accent: 'sky'
  },
  {
    title: 'SymptoGuide : Healthcare Website',
    desc: 'Multilingual (EN / SI / TA) health information platform with AI-assisted features and structured disease info for Sri Lanka.',
    tags: ['React', 'Machine Learning', 'i18n', 'JavaScript'],
    href: 'https://github.com/NISHFAN/SymptoGuide',
    year: '2024',
    colorFrom: 'from-tech-cyan/30',
    colorTo: 'to-tech-cyan/10',
    accent: 'emerald'
  },
  {
    title: 'Machinery Identification',
    desc: 'Image classifier to automatically identify machinery and parts in the workshop using deep learning and OpenCV.',
    tags: ['TensorFlow', 'Image Processing', 'Python'],
    href: 'https://github.com/NISHFAN/opencv_identifying_machinaries',
    year: '2024',
    colorFrom: 'from-tech-violet/30',
    colorTo: 'to-tech-cyan/30',
    accent: 'orange'
  },
  {
    title: "Sign-Language Detection",
    desc: "Developed a machine learning-based application to recognize and interpret sign language gestures using real-time classification.",
    tags: ['Python', 'OpenCV', 'Scikit-learn', 'MediaPipe'],
    href: "https://github.com/NISHFAN/Sign_Language_Detection",
    year: '2025',
    colorFrom: 'from-tech-cyan/30',
    colorTo: 'to-tech-violet/30',
    accent: 'purple'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 space-y-4 text-center md:text-left md:flex md:items-end justify-between"
        >
          <div>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white tracking-tighter leading-none mb-4 drop-shadow-lg">
              Featured <br className="hidden md:block" /> Work<span className="text-sky-400">.</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-xl">
              A selection of projects that showcase my ability to build complex systems across the hardware and software stack.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 border-b border-sky-500/30 pb-2">
            <span className="text-sky-400 font-mono font-bold tracking-widest text-sm uppercase">03</span>
            <span className="text-white font-bold tracking-wide">Select Works</span>
          </div>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Product Showcase Image Container */}
              <div className="w-full lg:w-3/5 relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:border-white/20 transition-all duration-700">
                  {/* Dynamic Gradient Placeholder replacing the raw image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${proj.colorFrom} ${proj.colorTo} opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out flex items-center justify-center`}>
                    <div className="text-white/20 font-black text-4xl sm:text-6xl tracking-tighter transform -rotate-12 select-none group-hover:text-white/30 transition-colors duration-700">
                      {proj.title.split(' ')[0].toUpperCase()}
                    </div>
                  </div>
                  {/* Glass sheen overlay */}
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`inline-flex items-center justify-center font-mono font-bold text-xs px-3 py-1 rounded-full bg-${proj.accent}-500/10 text-${proj.accent}-400 border border-${proj.accent}-500/20 uppercase tracking-widest`}>
                    {proj.year}
                  </span>
                  <div className="h-px bg-slate-700/50 flex-grow"></div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-[1.1] tracking-tight group-hover:text-sky-400 transition-colors duration-300">
                  {proj.href !== '#' ? (
                    <a href={proj.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/link">
                      {proj.title}
                    </a>
                  ) : (
                    proj.title
                  )}
                </h3>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl shadow-xl mb-8 relative z-10 lg:-ml-12 lg:group-even:ml-0 lg:group-even:-mr-12 group-hover:border-white/10 transition-colors duration-500">
                  <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed font-medium">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 mb-10">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs font-mono font-bold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center gap-5">
                    {!proj.isPrivate && proj.href !== '#' && (
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-tech-violet to-tech-cyan text-tech-text font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-105"
                      >
                        <FiGithub size={18} />
                        <span>Code</span>
                      </a>
                    )}
                    {(proj.live || (proj.href && proj.href !== '#')) && (
                      <a
                        href={proj.live || proj.href || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-tech-cyan/40 text-tech-text font-bold rounded-full hover:border-tech-cyan hover:bg-tech-cyan/10 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <FiArrowUpRight size={18} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>

                  {proj.isPrivate && (
                    <div className="flex items-start gap-3 text-sm font-medium text-tech-muted bg-tech-bg/50 border border-tech-violet/20 p-4 rounded-xl shadow-inner lg:w-11/12 xl:w-5/6 hover:border-tech-cyan/30 transition-colors duration-300">
                      <div className="mt-0.5 text-tech-cyan shrink-0">
                        <FiLock size={16} />
                      </div>
                      <p className="leading-relaxed">The source code repository is private. Git access can be provided upon request.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center pb-20 border-b border-slate-800">
          <h4 className="text-3xl font-black text-white mb-8 tracking-tight">Want to see more?</h4>
          <a
            href="https://github.com/NISHFAN"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-slate-900 border border-white/10 text-white font-bold tracking-wide rounded-full hover:bg-slate-800 hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-3">
              View GitHub Archive
              <FiGithub size={20} className="group-hover:text-sky-400 transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
