import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-tech-text flex items-baseline gap-4 tracking-tighter leading-none drop-shadow-lg">
              <span className="text-tech-cyan font-mono text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-widest">01.</span> 
              About Me<span className="text-tech-cyan">.</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-tech-violet/40 to-transparent flex-grow ml-4 md:ml-8"></div>
          </div>
          
          <div className="bg-tech-card/80 border border-tech-violet/20 p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl relative overflow-hidden group hover:border-tech-cyan/30 transition-all duration-700">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-cyan/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover:bg-tech-violet/20 transition-colors duration-1000"></div>
            
            <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-tech-muted leading-relaxed font-medium">
              <p>
                I am an Undergraduate in Science and Technology (Mechatronics Specialization) 
                with a deep passion for software engineering and modern AI development. 
              </p>
              <p>
                My experience spans across <span className="text-tech-text font-bold border-b-2 border-tech-cyan/40 pb-0.5">machine learning pipelines</span>, <span className="text-tech-text font-bold border-b-2 border-tech-violet/40 pb-0.5">embedded systems</span>, 
                <span className="text-tech-text font-bold"> real-time sensor integration</span>, and <span className="text-tech-text font-bold">computer vision</span> tailored for industrial automation. 
              </p>
              <p className="text-tech-muted">
                I thrive on turning messy, real-world problems into elegant, robust, and intelligent 
                <span className="text-tech-cyan font-bold px-3 py-1 rounded-lg bg-tech-cyan/10 ml-2 shadow-[inset_0_0_15px_rgba(6,182,212,0.1)] inline-block mt-2 sm:mt-0">software + hardware solutions</span>. 
                Whether it's building a fast full-stack web application or a real-time anomaly detection system, 
                I am driven by tangible impact and clean system architecture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
