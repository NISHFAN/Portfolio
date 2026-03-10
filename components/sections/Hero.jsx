import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden bg-tech-bg">
      {/* Tech Gradient Atmospheric Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-tech-violet/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[50%] bg-tech-cyan/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06B6D410_1px,transparent_1px),linear-gradient(to_bottom,#06B6D410_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-tech-card/80 border border-tech-cyan/20 backdrop-blur-xl text-tech-text text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_4px_24px_rgba(6,182,212,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tech-cyan"></span>
            </span>
            Available for opportunities
          </motion.div>
          
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tighter mb-8 text-tech-text drop-shadow-2xl">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-violet to-tech-cyan animate-gradient-x">Intelligent</span> <br />
            Systems.
          </h1>
          
          <p className="text-[clamp(1.1rem,2vw,1.25rem)] text-tech-muted mb-12 max-w-2xl leading-relaxed font-medium">
            Mechatronics Undergraduate bridging the physical and digital realms. 
            Designing embedded systems, orchestrating computer vision pipelines, 
            and deploying ML models for modern industrial solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4.5 font-bold tracking-wide text-tech-text bg-gradient-to-r from-tech-violet to-tech-cyan rounded-full overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative z-10 flex items-center gap-2">Explore Work <span className="group-hover:translate-x-1 transition-transform">→</span></span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4.5 rounded-full border border-tech-cyan/30 hover:border-tech-cyan bg-tech-cyan/5 hover:bg-tech-cyan/10 backdrop-blur-xl transition-all duration-300 font-bold text-tech-text flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5 relative max-w-lg mx-auto lg:max-w-none w-full mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glass Card */}
          <div className="bg-tech-card/80 backdrop-blur-3xl border border-tech-violet/20 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative group hover:border-tech-cyan/40 transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tech-violet/10 to-tech-cyan/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-tech-cyan/20 rounded-full blur-3xl pointer-events-none group-hover:bg-tech-violet/20 transition-colors duration-1000"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-tech-card shadow-[0_0_30px_rgba(6,182,212,0.3)] shrink-0 group-hover:ring-tech-cyan/60 transition-all duration-700 relative">
                  <div className="absolute inset-0 border border-tech-text/20 rounded-full z-10 pointer-events-none"></div>
                  <img 
                    src="/dp.jpg" 
                    alt="Mohamed Nishfan" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-tech-text mb-2 tracking-tight">Mohamed.</h2>
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-tech-bg border border-tech-cyan/30 text-tech-cyan text-xs font-black uppercase tracking-[0.15em] shadow-inner">
                    Software & Hardware
                  </div>
                </div>
              </div>
              
              <ul className="space-y-6 text-tech-muted text-sm sm:text-base font-semibold">
                {[
                  'Full-Stack Web Generation',
                  'Embedded IoT Interfaces',
                  'Applied Machine Learning',
                  'Real-time Data Architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-tech-bg/80 border border-tech-cyan/20 text-tech-cyan group-hover/item:border-tech-cyan/60 group-hover/item:bg-tech-cyan/20 group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 shadow-sm shrink-0">
                      <span className="transform group-hover/item:scale-110 transition-transform duration-300">✦</span>
                    </span>
                    <span className="group-hover/item:text-tech-text transition-colors tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
