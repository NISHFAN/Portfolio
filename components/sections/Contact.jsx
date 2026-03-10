import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-tech-violet/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-cyan/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-black text-tech-text mb-6 tracking-tighter leading-none drop-shadow-lg">
              <span className="text-tech-cyan font-mono text-[clamp(1.5rem,3vw,2.5rem)] font-bold mr-4 inline-block transform -translate-y-1 sm:-translate-y-2">05.</span> 
              Get In Touch<span className="text-tech-cyan">.</span>
            </h2>
            <p className="text-tech-muted max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
              I'm always open to discussing new opportunities in software engineering, 
              machine learning, and embedded systems. Whether you have a question or just 
              want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 lg:gap-16 bg-tech-card/80 backdrop-blur-3xl border border-tech-violet/20 p-10 md:p-14 lg:p-20 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* Contact Info */}
            <div className="md:col-span-2 flex flex-col justify-center space-y-10">
              <h3 className="text-4xl font-black text-tech-text tracking-tight">Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-violet to-tech-cyan">together.</span></h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mohammeddnishfan9295@gmail.com" 
                  className="flex items-center gap-6 text-tech-muted hover:text-tech-cyan transition-all duration-300 group"
                >
                  <div className="p-4 bg-tech-bg/50 border border-tech-violet/10 rounded-2xl group-hover:bg-tech-cyan/10 group-hover:border-tech-cyan/30 group-hover:-translate-y-1 transition-all duration-500 shadow-md">
                    <FiMail size={26} className="text-tech-muted group-hover:text-tech-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-[0.2em] text-tech-muted mb-1 uppercase">Email</p>
                    <p className="text-base font-semibold truncate max-w-[180px] sm:max-w-[250px] group-hover:text-tech-text transition-colors">mohammeddnishfan9295@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/mohamed-nisfan-mohamed-nisthar-956b25216" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 text-tech-muted hover:text-tech-cyan transition-all duration-300 group"
                >
                  <div className="p-4 bg-tech-bg/50 border border-tech-violet/10 rounded-2xl group-hover:bg-tech-cyan/10 group-hover:border-tech-cyan/30 group-hover:-translate-y-1 transition-all duration-500 shadow-md">
                    <FiLinkedin size={26} className="text-tech-muted group-hover:text-tech-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-[0.2em] text-tech-muted mb-1 uppercase">LinkedIn</p>
                    <p className="text-base font-semibold group-hover:text-tech-text transition-colors">Mohammed Nishfan</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/NISHFAN" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-6 text-tech-muted hover:text-tech-cyan transition-all duration-300 group"
                >
                  <div className="p-4 bg-tech-bg/50 border border-tech-violet/10 rounded-2xl group-hover:bg-tech-cyan/10 group-hover:border-tech-cyan/30 group-hover:-translate-y-1 transition-all duration-500 shadow-md">
                    <FiGithub size={26} className="text-tech-muted group-hover:text-tech-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-[0.2em] text-tech-muted mb-1 uppercase">GitHub</p>
                    <p className="text-base font-semibold group-hover:text-tech-text transition-colors">@NISHFAN</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form action="mailto:mohammeddnishfan9295@gmail.com" method="GET" className="space-y-8 bg-tech-bg/30 p-8 sm:p-10 rounded-[2rem] border border-tech-violet/10 shadow-inner">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-tech-muted ml-2">Your Name</label>
                    <input 
                      name="subject" 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      className="w-full bg-tech-bg/80 border border-tech-violet/20 rounded-2xl px-5 py-4 text-tech-text placeholder-tech-muted/50 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan hover:border-tech-violet/40 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-tech-muted ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      className="w-full bg-tech-bg/80 border border-tech-violet/20 rounded-2xl px-5 py-4 text-tech-text placeholder-tech-muted/50 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan hover:border-tech-violet/40 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-tech-muted ml-2">Message</label>
                  <textarea 
                    name="body"
                    rows={6} 
                    placeholder="Hello, I'd like to talk about..." 
                    required
                    className="w-full bg-tech-bg/80 border border-tech-violet/20 rounded-2xl px-5 py-4 text-tech-text placeholder-tech-muted/50 focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan hover:border-tech-violet/40 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-tech-cyan to-tech-violet text-tech-text font-black tracking-wide rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                >
                  Send Message
                  <FiSend className="text-xl" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
