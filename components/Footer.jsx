import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-tech-bg border-t border-tech-violet/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <p className="text-tech-text font-black text-xl tracking-tighter mb-2">NISHFAN<span className="text-tech-cyan">.</span></p>
          <p className="text-tech-muted text-sm font-medium tracking-wide">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          {[
            { Icon: FiGithub, href: 'https://github.com/NISHFAN' },
            { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/mohamed-nisfan-mohamed-nisthar-956b25216' },
            { Icon: FiMail, href: 'mailto:mohammeddnishfan9295@gmail.com' }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i}
              href={href} 
              target="_blank" 
              rel="noreferrer" 
              className="text-tech-muted hover:text-tech-cyan transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}